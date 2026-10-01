# Design Plan 002: Accordion Gallery ARIA & Semantic Accessibility Refactoring

**Status**: Completed & Verified  
**Audited Surface**: Accordion Gallery Component (`components/public/AccordionGallery.tsx`)  
**Governing Document**: [`acc-ui.md`](file:///c:/Hacks/CT-Fair/acc-ui.md) (Fixing Accessibility)  
**Governing Constraints**: [`improve.md`](file:///c:/Hacks/CT-Fair/improve.md), [`baseline-ui.md`](file:///c:/Hacks/CT-Fair/baseline-ui.md)  
**Target Commit**: N/A (Working tree outside git version control)  

---

## 1. Problem Statement

The `AccordionGallery` component violates core accessibility contracts specified in [`acc-ui.md`](file:///c:/Hacks/CT-Fair/acc-ui.md) and W3C HTML5 §4.10.19 (Interactive Content):
1. **Nested Interactive Controls**: The outer panel container is rendered as `<div role="button" tabIndex={0} ...>`, while simultaneously containing inner interactive links (`<Link href="...">Register For Event</Link>` and `<Link href="...">Specifications</Link>`). 
2. **Keyboard Focus & Screen Reader Failure**: Browsers and assistive technologies cannot predictably route `Enter` and `Space` keypresses when a focusable `role="button"` contains nested focusable `<a>` elements. Screen readers either collapse the name computation or fail to announce inner action destinations.
3. **Missing Semantic Accordion Linkage**: The trigger controls lack standard `aria-controls` referencing their corresponding expanded content regions.

---

## 2. Evidence & Traced Runtime Path

### Contract Citations
- **[`acc-ui.md` §1 line 51](file:///c:/Hacks/CT-Fair/acc-ui.md#L51)**:
  > `every interactive control must have an accessible name`
- **[`acc-ui.md` §2 lines 58–61](file:///c:/Hacks/CT-Fair/acc-ui.md#L58-L61)**:
  > `do not use div or span as buttons without full keyboard support`  
  > `all interactive elements must be reachable by Tab`  
  > `focus must be visible for keyboard users`
- **[`acc-ui.md` §4 lines 74–75](file:///c:/Hacks/CT-Fair/acc-ui.md#L74-L75)**:
  > `prefer native elements (button, a, input) over role-based hacks`  
  > `if a role is used, required aria attributes must be present`
- **[`acc-ui.md` §6 line 93](file:///c:/Hacks/CT-Fair/acc-ui.md#L93)**:
  > `expandable controls must use aria-expanded and aria-controls`

### Runtime Path & Violations
- **File**: [`components/public/AccordionGallery.tsx`](file:///c:/Hacks/CT-Fair/components/public/AccordionGallery.tsx)
  - **Lines 84–96**:
    ```tsx
    <div
      key={`${item.label}-${index}`}
      {...interactionProps}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={item.label}
      style={{
        flex: `${flexValue} ${flexValue} 0%`,
        transition: 'flex 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`relative overflow-hidden cursor-pointer group outline-none ...`}
    >
    ```
  - **Lines 205–224 (Nested Links inside outer button)**:
    ```tsx
    <Link
      href={item.link || '/register'}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#b88e3e] ..."
    >
      <span>Register For Event</span>
      <ArrowUpRight className="size-3.5" />
    </Link>
    ```

---

## 3. Implementation Steps for Executor

The implementing agent must make the following targeted modifications in [`components/public/AccordionGallery.tsx`](file:///c:/Hacks/CT-Fair/components/public/AccordionGallery.tsx):

### Step 3.1: Replace Outer `role="button"` with Semantic Landmark
Replace `<div role="button" tabIndex={0}>` with an `<article>` landmark identified by an accessible header ID:
```diff
- <div
-   key={`${item.label}-${index}`}
-   {...interactionProps}
-   tabIndex={0}
-   role="button"
-   aria-expanded={isExpanded}
-   aria-label={item.label}
+ <article
+   key={`${item.label}-${index}`}
+   id={`accordion-panel-${index}`}
+   aria-labelledby={`accordion-heading-${index}`}
+   onMouseEnter={trigger === 'hover' ? () => handleInteraction(index) : undefined}
    style={{
      flex: `${flexValue} ${flexValue} 0%`,
      transition: 'flex 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
    }}
    className="relative overflow-hidden group outline-none border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:border-r-0 will-change-[flex]"
  >
```

### Step 3.2: Introduce Dedicated Native Expand Button for Collapsed State
Wrap the collapsed vertical/horizontal tab in a native `<button type="button">` with proper `aria-expanded` and `aria-controls`:
```diff
  {/* COLLAPSED STATE: Native Button Trigger */}
  <button
    type="button"
    onClick={() => handleInteraction(index)}
    onFocus={() => handleInteraction(index)}
    aria-expanded={isExpanded}
    aria-controls={`accordion-content-${index}`}
    aria-label={`Expand ${item.label} specifications`}
    className={`absolute inset-0 z-20 w-full h-full text-left bg-transparent border-none p-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#b88e3e] focus-visible:ring-inset transition-opacity duration-300 ${
      isExpanded ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
    }`}
  >
    {/* Inner label layout */}
    <div className="hidden md:flex flex-col justify-end p-5 h-full">
      <div className="flex items-center gap-3 [writing-mode:vertical-rl] rotate-180 origin-center text-white/90">
        <span className="font-mono text-[10px] tracking-[0.25em] text-[#b88e3e] uppercase font-semibold">
          {item.category || 'EVENT'}
        </span>
        <span className="font-serif text-lg font-medium tracking-tight whitespace-nowrap">
          {item.label}
        </span>
      </div>
      <div className="w-1.5 h-1.5 rounded-full bg-[#b88e3e] mt-4 self-center" />
    </div>
  </button>
```

### Step 3.3: Link Expanded Section with ID
Assign `id={`accordion-content-${index}`}` and `id={`accordion-heading-${index}`}` to the expanded card container and heading:
```diff
  {/* EXPANDED STATE */}
  <div
+   id={`accordion-content-${index}`}
    className={`relative z-20 h-full flex flex-col justify-end p-6 sm:p-8 lg:p-10 text-white transition-all duration-500 ease-out ${
      isExpanded
        ? 'opacity-100 translate-y-0 pointer-events-auto delay-100'
        : 'opacity-0 translate-y-6 pointer-events-none'
    }`}
  >
    <div className="space-y-4 max-w-xl">
      ...
      <h3
+       id={`accordion-heading-${index}`}
        className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium tracking-tight leading-tight"
      >
        {item.label}
      </h3>
```

---

## 4. Acceptance Criteria & Verification

1. **Accessibility Tree Validation**:
   - Zero occurrences of `<a href="...">` nested inside `<button>` or `[role="button"]`.
   - Every panel trigger has a valid accessible name (`aria-label={`Expand ${item.label} specifications`}`).
   - `aria-expanded` cleanly toggles between `"true"` and `"false"`.
2. **Keyboard Navigation**:
   - Tabbing moves focus cleanly to the collapsed panel trigger button.
   - Pressing `Enter` or `Space` on a collapsed panel trigger smoothly expands that card.
   - When a card is expanded, Tabbing moves focus sequentially to the inner `Register For Event` and `Specifications` links.
   - Visible gold focus rings appear via `focus-visible:ring-2 focus-visible:ring-[#b88e3e]`.
3. **Responsive Visual Integrity**:
   - Hover and tap behavior on desktop and mobile remain identical in smoothness and animation curves.
   - Compilation produces zero JSX/TS errors.

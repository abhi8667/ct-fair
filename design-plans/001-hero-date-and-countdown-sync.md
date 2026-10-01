# Design Plan 001: Hero Event Date Synchronization & Real-time Countdown Integration

**Status**: Completed & Verified  
**Audited Surface**: Public Landing Page (`app/page.tsx`)  
**Governing Document**: [`Concrete_Fair_2026_PRD(1).md`](file:///c:/Hacks/CT-Fair/Concrete_Fair_2026_PRD%281%29.md)  
**Governing Constraints**: [`improve.md`](file:///c:/Hacks/CT-Fair/improve.md), [`baseline-ui.md`](file:///c:/Hacks/CT-Fair/baseline-ui.md), [`motion.md`](file:///c:/Hacks/CT-Fair/motion.md)  
**Target Commit**: N/A (Working tree outside git version control)  

---

## 1. Problem Statement

The public landing page contains direct contradictions with the binding Product Requirements Document ([`Concrete_Fair_2026_PRD(1).md`](file:///c:/Hacks/CT-Fair/Concrete_Fair_2026_PRD%281%29.md)):
1. **Conflicting Event Dates**: The hero metadata row and floating badge state `19 — 20 DEC 2026`, whereas the binding PRD date contract is **30 November – 1 December 2026** ([PRD §1 line 6, §9 line 319](file:///c:/Hacks/CT-Fair/Concrete_Fair_2026_PRD%281%29.md#L6)).
2. **Unapproved Hero Metric**: The hero displays an extraneous `400+ Participants (Expected)` metric block, violating the explicit PRD constraint: *"The hero should not contain unnecessary participant statistics."* ([PRD §9 line 327](file:///c:/Hacks/CT-Fair/Concrete_Fair_2026_PRD%281%29.md#L327)).
3. **Hardcoded Static Countdown**: The countdown card in Section 2 renders static hardcoded numbers (`75 DAYS / 12 HOURS / 28 MINS / 16 SECS`) and target `DEC 19, 2026`, violating the PRD requirement for a real-time event start date source with timezone handling ([PRD §10 lines 372–377](file:///c:/Hacks/CT-Fair/Concrete_Fair_2026_PRD%281%29.md#L372-L377)).

---

## 2. Evidence & Traced Runtime Path

### Contract Citations
- **[`Concrete_Fair_2026_PRD(1).md`](file:///c:/Hacks/CT-Fair/Concrete_Fair_2026_PRD%281%29.md#L6)**:
  > `**Event dates:** **30 November – 1 December 2026**`
- **[`Concrete_Fair_2026_PRD(1).md`](file:///c:/Hacks/CT-Fair/Concrete_Fair_2026_PRD%281%29.md#L319-L327)**:
  > `30 NOVEMBER — 1 DECEMBER`  
  > `RVCE · BENGALURU`  
  > `The hero should not contain unnecessary participant statistics.`
- **[`Concrete_Fair_2026_PRD(1).md`](file:///c:/Hacks/CT-Fair/Concrete_Fair_2026_PRD%281%29.md#L372-L377)**:
  > `Requirements:`  
  > `- Real-time update`  
  > `- Event start date/time as source`  
  > `- Correct timezone handling`  
  > `- Stop when event begins`

### Runtime Path & Violations
- **File**: [`app/page.tsx`](file:///c:/Hacks/CT-Fair/app/page.tsx)
  - **Lines 126–129**:
    ```tsx
    <strong className="block text-[#14181b]">19 — 20</strong>
    <span className="text-stone-500 text-[11px]">DEC 2026</span>
    ```
  - **Lines 143–150**:
    ```tsx
    <div className="flex items-center gap-2">
      <Users className="size-4 text-[#b88e3e] shrink-0" />
      <span>
        <strong className="block text-[#14181b]">400+</strong>
        <span className="text-stone-500 text-[11px]">Participants (Expected)</span>
      </span>
    </div>
    ```
  - **Lines 361–381**: Hardcoded raw numbers `75`, `12`, `28`, `16` and footer string `DEC 19, 2026`.

### Reusable Exemplar
- **Component**: [`components/public/countdown-timer.tsx`](file:///c:/Hacks/CT-Fair/components/public/countdown-timer.tsx)
  Already implements client-side real-time delta calculation, zero-padding, interval clean-up on unmount, and accessible time-unit labels.

---

## 3. Implementation Steps for Executor

The implementing agent must perform the following self-contained edits in [`app/page.tsx`](file:///c:/Hacks/CT-Fair/app/page.tsx):

### Step 3.1: Synchronize Hero Dates
In `app/page.tsx` line 126:
```diff
- <strong className="block text-[#14181b]">19 — 20</strong>
- <span className="text-stone-500 text-[11px]">DEC 2026</span>
+ <strong className="block text-[#14181b]">30 NOV — 01 DEC</strong>
+ <span className="text-stone-500 text-[11px]">2026 · RVCE CAMPUS</span>
```

### Step 3.2: Remove Extraneous Participant Count from Hero Metadata
In `app/page.tsx`, replace the `400+ Participants` block (lines 141–150) with the institutional host certification metadata to maintain visual balance without violating PRD §9:
```diff
- <span className="h-6 w-px bg-stone-300 hidden sm:inline-block" />
-
- <div className="flex items-center gap-2">
-   <Users className="size-4 text-[#b88e3e] shrink-0" />
-   <span>
-     <strong className="block text-[#14181b]">400+</strong>
-     <span className="text-stone-500 text-[11px]">Participants (Expected)</span>
-   </span>
- </div>
+ <span className="h-6 w-px bg-stone-300 hidden sm:inline-block" />
+
+ <div className="flex items-center gap-2">
+   <Sparkles className="size-4 text-[#b88e3e] shrink-0" />
+   <span>
+     <strong className="block text-[#14181b]">Civil Engineering</strong>
+     <span className="text-stone-500 text-[11px]">Department Conclave</span>
+   </span>
+ </div>
```

### Step 3.3: Dynamic Countdown Integration
In `app/page.tsx` (Card 6 of Section 2, lines 340–385):
Replace the static numbers and `DEC 19, 2026` label with the dynamic `CountdownTimer` primitive or dynamic real-time time delta calculation sourcing `2026-11-30T09:00:00+05:30` (Asia/Kolkata):
```diff
- <div>
-   <span className="font-serif text-2xl font-light leading-none block text-white">75</span>
-   <span className="font-mono text-[8px] text-stone-400 uppercase mt-0.5 block">DAYS</span>
- </div>
- ...
- <span>DEC 19, 2026</span>
+ <CountdownTimer targetDate="2026-11-30T09:00:00+05:30" />
+ ...
+ <span>NOV 30, 2026</span>
```

---

## 4. Acceptance Criteria & Verification

1. **Date Verification**:
   - Hero metadata date reads: `30 NOV — 01 DEC 2026`.
   - Floating badge over architectural montage displays dates aligning with 30 November – 1 December 2026.
   - Countdown card footer reads: `NOV 30, 2026`.
2. **Hero Metric Verification**:
   - The unapproved `400+ Participants` counter is completely absent from the hero.
   - Hero layout maintains responsive spacing across mobile, tablet, and desktop breakpoints.
3. **Countdown Dynamic Calculation**:
   - Countdown values (`DAYS`, `HOURS`, `MINS`, `SECS`) update every second based on `Date.now()` vs `2026-11-30T09:00:00+05:30`.
   - No layout shift or hydration mismatch warning occurs during SSR/hydration.
4. **Build & Response**:
   - `http://localhost:3000/` responds with HTTP 200 OK.

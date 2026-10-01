import { cn } from '@/lib/utils'

export function PageHeader({
  index,
  eyebrow,
  title,
  serif,
  description,
  actions,
}: {
  index: string
  eyebrow: string
  title: string
  serif?: string
  description?: string
  actions?: React.ReactNode
}) {
  return (
    <header className="mb-10 grid gap-6 border-b border-foreground/80 pb-8 md:grid-cols-12 md:items-end">
      <div className="md:col-span-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-[11px] text-gold">§ {index}</span>
          <span className="h-px w-10 bg-gold" aria-hidden="true" />
          <span className="label-tech text-muted-foreground">{eyebrow}</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold uppercase leading-[0.95] tracking-tight md:text-6xl">
          {title}
          {serif && (
            <span className="mt-1 block font-serif text-3xl font-normal normal-case italic tracking-normal text-muted-foreground md:text-5xl">
              {serif}
            </span>
          )}
        </h1>
      </div>
      <div className="flex flex-col gap-4 md:col-span-4 md:items-end md:text-right">
        {description && <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">{description}</p>}
        {actions && <div className="flex flex-wrap gap-2 md:justify-end">{actions}</div>}
      </div>
    </header>
  )
}

export function Panel({
  title,
  code,
  action,
  children,
  className,
  bodyClassName,
}: {
  title?: string
  code?: string
  action?: React.ReactNode
  children: React.ReactNode
  className?: string
  bodyClassName?: string
}) {
  return (
    <section className={cn('relative border border-border bg-card', className)}>
      <CornerMarks />
      {title && (
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5">
          <div className="flex items-baseline gap-3">
            {code && <span className="font-mono text-[10px] text-gold">{code}</span>}
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em]">{title}</h2>
          </div>
          {action}
        </div>
      )}
      <div className={cn('p-5', bodyClassName)}>{children}</div>
    </section>
  )
}

export function CornerMarks() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="absolute -top-px -left-px size-2 border-t border-l border-foreground/60" />
      <span className="absolute -top-px -right-px size-2 border-t border-r border-foreground/60" />
      <span className="absolute -bottom-px -left-px size-2 border-b border-l border-foreground/60" />
      <span className="absolute -right-px -bottom-px size-2 border-r border-b border-foreground/60" />
    </span>
  )
}

export function MetricCard({
  label,
  value,
  unit,
  delta,
  note,
  progress,
  index,
}: {
  label: string
  value: string
  unit?: string
  delta?: string
  note?: string
  progress?: number
  index: string
}) {
  return (
    <div className="group relative flex flex-col justify-between gap-6 border border-border bg-card p-5 transition-colors hover:border-foreground/40">
      <div className="flex items-start justify-between">
        <p className="label-tech text-muted-foreground">{label}</p>
        <span className="font-mono text-[10px] text-muted-foreground/60 transition-colors group-hover:text-gold">{index}</span>
      </div>
      <div>
        <p className="flex items-baseline gap-1.5 font-semibold tracking-tight">
          <span className="text-3xl md:text-4xl">{value}</span>
          {unit && <span className="font-mono text-xs text-muted-foreground">{unit}</span>}
        </p>
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-dashed border-border pt-3">
          {delta && <span className="font-mono text-[11px] text-success">{delta}</span>}
          {note && <span className="text-[11px] text-muted-foreground">{note}</span>}
        </div>
        {progress !== undefined && (
          <div className="mt-3 h-1 bg-muted" aria-hidden="true">
            <div className="h-full bg-foreground" style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>
    </div>
  )
}

const statusStyles: Record<string, string> = {
  OPEN: 'border-success/40 text-success',
  CLOSED: 'border-border text-muted-foreground',
  'SOLD OUT': 'border-gold/60 text-gold bg-gold-soft/40',
  CONFIRMED: 'border-foreground/30 text-foreground',
  PENDING: 'border-gold/60 text-gold',
  'CHECKED IN': 'border-success/40 bg-success/5 text-success',
  CANCELLED: 'border-danger/40 text-danger',
  PAID: 'border-success/40 text-success',
  WAIVED: 'border-border text-muted-foreground',
  REFUNDED: 'border-danger/40 text-danger',
  'ON DUTY': 'border-success/40 text-success',
  'OFF DUTY': 'border-border text-muted-foreground',
  'ON BREAK': 'border-gold/60 text-gold',
  UNASSIGNED: 'border-danger/40 text-danger',
  PUBLISHED: 'border-success/40 text-success',
  SCHEDULED: 'border-gold/60 text-gold',
  DRAFT: 'border-border text-muted-foreground',
}

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] whitespace-nowrap',
        statusStyles[status] ?? 'border-border text-muted-foreground',
        className,
      )}
    >
      <span className="size-1 bg-current" aria-hidden="true" />
      {status}
    </span>
  )
}

export function FilterTabs<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly T[]
  value: T
  onChange: (v: T) => void
  label: string
}) {
  return (
    <div role="tablist" aria-label={label} className="flex flex-wrap border border-border bg-card">
      {options.map((opt) => {
        const active = opt === value
        return (
          <button
            key={opt}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt)}
            className={cn(
              'relative px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors',
              active ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {opt}
            {active && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-gold" aria-hidden="true" />}
          </button>
        )
      })}
    </div>
  )
}

export function ActionButton({
  children,
  variant = 'outline',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'outline' | 'solid' | 'ghost' }) {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        'inline-flex h-9 items-center justify-center gap-2 px-4 text-[13px] font-medium transition-colors disabled:opacity-50',
        variant === 'solid' && 'bg-primary text-primary-foreground hover:bg-primary/90',
        variant === 'outline' && 'border border-border bg-card hover:border-foreground/50',
        variant === 'ghost' && 'text-muted-foreground hover:text-foreground',
        className,
      )}
    >
      {children}
    </button>
  )
}

export function Meter({ value, max, className }: { value: number; max: number; className?: string }) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  return (
    <div className={cn('relative h-1.5 bg-muted', className)} role="meter" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      <div className={cn('h-full', pct >= 100 ? 'bg-gold' : 'bg-foreground')} style={{ width: `${pct}%` }} />
      <div className="absolute inset-0 flex justify-between" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="h-full w-px bg-background/70" />
        ))}
      </div>
    </div>
  )
}

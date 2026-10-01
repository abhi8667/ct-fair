'use client'

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { hourlyAttendance, registrationTrend, volunteerAttendance, inr } from '@/lib/data'

const axis = {
  tick: { fontSize: 10, fontFamily: 'var(--font-jetbrains)', fill: '#66655f' },
  tickLine: false,
  axisLine: { stroke: '#d8d3c7' },
}

function ChartTooltip({
  active,
  payload,
  label,
  format,
}: {
  active?: boolean
  payload?: { name: string; value: number; color?: string }[]
  label?: string
  format?: (v: number) => string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="border border-foreground bg-card px-3 py-2 shadow-sm">
      <p className="label-tech mb-1 text-muted-foreground">{label}</p>
      {payload.map((p) => (
        <p key={p.name} className="font-mono text-xs">
          <span className="text-muted-foreground">{p.name} </span>
          {format ? format(p.value) : p.value}
        </p>
      ))}
    </div>
  )
}

export function RegistrationTrendChart({ height = 260 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={registrationTrend} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
        <defs>
          <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#23272b" strokeOpacity="0.12" strokeWidth="1" />
          </pattern>
        </defs>
        <CartesianGrid stroke="#d8d3c7" strokeDasharray="2 4" vertical={false} />
        <XAxis dataKey="date" {...axis} />
        <YAxis {...axis} axisLine={false} />
        <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#a4833a', strokeWidth: 1 }} />
        <Area
          type="linear"
          dataKey="registrations"
          name="Registrations"
          stroke="#23272b"
          strokeWidth={1.5}
          fill="url(#hatch)"
          dot={{ r: 2.5, fill: '#faf8f3', stroke: '#23272b', strokeWidth: 1 }}
          activeDot={{ r: 4, fill: '#a4833a', stroke: '#a4833a' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function RevenueChart({ height = 240 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={registrationTrend} margin={{ top: 10, right: 8, left: -6, bottom: 0 }}>
        <CartesianGrid stroke="#d8d3c7" strokeDasharray="2 4" vertical={false} />
        <XAxis dataKey="date" {...axis} />
        <YAxis {...axis} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
        <Tooltip content={<ChartTooltip format={inr} />} cursor={{ fill: '#e9e5dc' }} />
        <Bar dataKey="revenue" name="Revenue" fill="#23272b" barSize={14} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function HourlyAttendanceChart({ height = 220 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={hourlyAttendance} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
        <CartesianGrid stroke="#d8d3c7" strokeDasharray="2 4" vertical={false} />
        <XAxis dataKey="hour" {...axis} />
        <YAxis {...axis} axisLine={false} />
        <Tooltip content={<ChartTooltip />} cursor={{ fill: '#e9e5dc' }} />
        <Bar dataKey="checkins" name="Check-ins" fill="#9b9890" activeBar={{ fill: '#a4833a' }} barSize={18} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function VolunteerAttendanceChart({ height = 220 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={volunteerAttendance} margin={{ top: 10, right: 12, left: -18, bottom: 0 }}>
        <CartesianGrid stroke="#d8d3c7" strokeDasharray="2 4" vertical={false} />
        <XAxis dataKey="day" {...axis} />
        <YAxis {...axis} axisLine={false} />
        <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#a4833a', strokeWidth: 1 }} />
        <Line
          type="linear"
          dataKey="expected"
          name="Expected"
          stroke="#9b9890"
          strokeDasharray="4 4"
          strokeWidth={1}
          dot={false}
        />
        <Line
          type="linear"
          dataKey="present"
          name="Present"
          stroke="#23272b"
          strokeWidth={1.5}
          dot={{ r: 3, fill: '#faf8f3', stroke: '#23272b' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function Ring({ value, label, size = 140 }: { value: number; label: string; size?: number }) {
  const r = size / 2 - 8
  const c = 2 * Math.PI * r
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#d8d3c7" strokeWidth="1" />
        <circle cx={size / 2} cy={size / 2} r={r - 6} fill="none" stroke="#e9e5dc" strokeWidth="6" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r - 6}
          fill="none"
          stroke="#23272b"
          strokeWidth="6"
          strokeDasharray={`${(value / 100) * 2 * Math.PI * (r - 6)} ${c}`}
        />
      </svg>
      <div className="absolute text-center">
        <p className="text-2xl font-semibold tracking-tight">{value}%</p>
        <p className="label-tech text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}

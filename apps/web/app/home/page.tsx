'use client'
import { useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'

const T = {
  bg: '#0B0B0C', surface: '#111113', card: '#131315',
  border: '#1E1E22', purple: '#7A5CFF', lime: '#ACEC00',
  text: '#FFFFFF', muted: '#888896',
}

const HEXAGON = [
  { id: 'adn',        label: 'ADN',        subtitle: 'Tu marca · BranDNA · Brand Score', color: '#7A5CFF', href: '/home/adn',        status: 'active',  progress: 40,
    modules: ['Brand Builder', '6 M\'s', '8 I\'s', 'Brand Score'],
    icon: '🧬' },
  { id: 'aprende',    label: 'APRENDE',    subtitle: 'Comunidad · Workshops · Accelerator', color: '#3B82F6', href: '/home/aprende',    status: 'active',  progress: 20,
    modules: ['Community', 'Workshops', 'Accelerator', 'Biblioteca'],
    icon: '📚' },
  { id: 'atrae',      label: 'ATRAE',      subtitle: 'Orgánico · Pagado · Lead Magnets', color: '#ACEC00', href: '/home/atrae',      status: 'locked',  progress: 0,
    modules: ['6 P\'s', 'VICAS', 'Social Planner', 'Meta Ads'],
    icon: '🧲' },
  { id: 'adquiere',   label: 'ADQUIERE',   subtitle: 'Funnel · MagiQuest · 10 Fases', color: '#F97316', href: '/home/adquiere',   status: 'locked',  progress: 0,
    modules: ['MagiQuest', 'DMChamp', '10 Fases', 'BRM'],
    icon: '💰' },
  { id: 'asciende',   label: 'ASCIENDE',   subtitle: 'Cursos · Consulting · Community', color: '#EC4899', href: '/home/asciende',   status: 'locked',  progress: 0,
    modules: ['Onboarding', 'Cursos', 'Comunidad', 'Mentoring'],
    icon: '🚀' },
  { id: 'administra', label: 'ADMINISTRA', subtitle: 'KPIs · Dashboards · CRM · Reportes', color: '#14B8A6', href: '/home/administra', status: 'active',  progress: 5,
    modules: ['Dashboards', 'KPIs', 'CRM', 'Reportes'],
    icon: '📊' },
]

function HexCard({ s }: { s: typeof HEXAGON[0] }) {
  const locked = s.status === 'locked'
  return (
    <a href={locked ? undefined : s.href} style={{
      textDecoration: 'none',
      background: T.card,
      border: `1px solid ${locked ? T.border : s.color}30`,
      borderRadius: 16,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      cursor: locked ? 'not-allowed' : 'pointer',
      opacity: locked ? 0.55 : 1,
      transition: 'transform 0.15s, box-shadow 0.15s',
      position: 'relative',
      overflow: 'hidden',
    }}
    onMouseEnter={e => { if (!locked) { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${s.color}20` } }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
    >
      {/* Glow accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: locked ? T.border : s.color, borderRadius: '16px 16px 0 0' }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 28, lineHeight: 1 }}>{s.icon}</div>
        {locked ? (
          <span style={{ fontSize: 10, background: T.surface, color: T.muted, padding: '3px 8px', borderRadius: 20, fontWeight: 600 }}>🔒 BLOQUEADO</span>
        ) : (
          <span style={{ fontSize: 10, background: `${s.color}20`, color: s.color, padding: '3px 8px', borderRadius: 20, fontWeight: 700 }}>ACTIVO</span>
        )}
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: 13, fontWeight: 800, color: locked ? T.muted : T.text, letterSpacing: '0.5px' }}>{s.label}</div>
        <div style={{ fontSize: 11, color: T.muted, marginTop: 3, lineHeight: 1.4 }}>{s.subtitle}</div>
      </div>

      {/* Modules */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        {s.modules.map(m => (
          <span key={m} style={{
            fontSize: 9, fontWeight: 600, padding: '2px 7px', borderRadius: 10,
            background: T.surface, color: T.muted, border: `1px solid ${T.border}`,
          }}>{m}</span>
        ))}
      </div>

      {/* Progress */}
      {!locked && s.progress > 0 && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 10, color: T.muted }}>Progreso</span>
            <span style={{ fontSize: 10, color: s.color, fontWeight: 700 }}>{s.progress}%</span>
          </div>
          <div style={{ height: 3, background: T.border, borderRadius: 4 }}>
            <div style={{ height: '100%', width: `${s.progress}%`, background: s.color, borderRadius: 4, transition: 'width 0.8s ease' }} />
          </div>
        </div>
      )}

      {/* CTA */}
      {!locked && (
        <div style={{ fontSize: 11, color: s.color, fontWeight: 600 }}>
          Entrar →
        </div>
      )}
    </a>
  )
}

export default function DashboardPage() {
  const [userName, setUserName] = useState('')
  const sb = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  useEffect(() => {
    sb.auth.getUser().then(({ data }) => {
      if (data.user) setUserName(data.user.user_metadata?.full_name?.split(' ')[0] || 'DeseOso')
    })
  }, [])

  const hour = new Date().getHours()
  const greeting = hour < 13 ? 'Buenos días' : hour < 20 ? 'Buenas tardes' : 'Buenas noches'

  return (
    <div style={{ maxWidth: 1100 }}>
      {/* Welcome */}
      <div style={{
        background: T.card, border: `1px solid ${T.border}`,
        borderRadius: 16, padding: '24px 28px', marginBottom: 28,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, color: T.text }}>
            {greeting}, {userName} 👋
          </div>
          <div style={{ fontSize: 13, color: T.muted, marginTop: 6 }}>
            Tu sistema operativo está listo. Elige un espacio para comenzar.
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, color: T.muted }}>Brand Score</div>
          <div style={{ fontSize: 28, fontWeight: 800, color: T.purple }}>40<span style={{ fontSize: 14, color: T.muted }}>/100</span></div>
        </div>
      </div>

      {/* Subtitle */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: T.muted, letterSpacing: '1px', margin: 0 }}>
          EL HONEYCOMB — 6 ESPACIOS DE OPERACIÓN
        </h2>
      </div>

      {/* Honeycomb grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        marginBottom: 28,
      }}>
        {HEXAGON.map(s => <HexCard key={s.id} s={s} />)}
      </div>

      {/* Quick stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 12,
      }}>
        {[
          { label: 'Brand Score',   value: '40/100', color: '#7A5CFF', icon: '🧬' },
          { label: 'Espacios activos', value: '3/6',     color: '#3B82F6', icon: '⚡' },
          { label: 'Módulos listos',   value: '2',       color: '#ACEC00', icon: '✅' },
          { label: 'Próximo paso',      value: 'ADN',     color: '#F97316', icon: '🎯' },
        ].map(stat => (
          <div key={stat.label} style={{
            background: T.card, border: `1px solid ${T.border}`,
            borderRadius: 12, padding: '16px 18px',
          }}>
            <div style={{ fontSize: 18, marginBottom: 6 }}>{stat.icon}</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: stat.color }}>{stat.value}</div>
            <div style={{ fontSize: 11, color: T.muted, marginTop: 2 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

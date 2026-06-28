'use client'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

const T = {
  bg:      '#0B0B0C',
  surface: '#111113',
  card:    '#131315',
  border:  '#1E1E22',
  purple:  '#7A5CFF',
  lime:    '#ACEC00',
  text:    '#FFFFFF',
  muted:   '#888896',
}

const SECTIONS = [
  { id: 'adn',        label: 'ADN',        subtitle: 'Tu marca',           color: '#7A5CFF', href: '/home/adn',
    icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/></svg> },
  { id: 'aprende',    label: 'APRENDE',    subtitle: 'Comunidad y escuela', color: '#3B82F6', href: '/home/aprende',
    icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill="currentColor"/></svg> },
  { id: 'atrae',      label: 'ATRAE',      subtitle: 'Orgánico + pagado',  color: '#ACEC00', href: '/home/atrae',
    icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/></svg> },
  { id: 'adquiere',   label: 'ADQUIERE',   subtitle: 'Tu funnel completo', color: '#F97316', href: '/home/adquiere',
    icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" fill="currentColor"/></svg> },
  { id: 'asciende',   label: 'ASCIENDE',   subtitle: 'Tu delivery',        color: '#EC4899', href: '/home/asciende',
    icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M13 6.99h3L12 3 8 7h3v4H8l4 4 4-4h-3V6.99zM4 19h16v-2H4v2z" fill="currentColor"/></svg> },
  { id: 'administra', label: 'ADMINISTRA', subtitle: 'KPIs y reportes',    color: '#14B8A6', href: '/home/administra',
    icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="currentColor"/></svg> },
]

function Sidebar() {
  const pathname = usePathname()
  const router   = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  const sb = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return (
    <aside style={{
      width: collapsed ? 64 : 220,
      minHeight: '100vh',
      background: T.surface,
      borderRight: `1px solid ${T.border}`,
      display: 'flex',
      flexDirection: 'column',
      transition: 'width 0.2s ease',
      flexShrink: 0,
      position: 'sticky',
      top: 0,
      height: '100vh',
    }}>
      {/* Logo + collapse */}
      <div style={{
        padding: collapsed ? '18px 16px' : '20px 16px 16px',
        borderBottom: `1px solid ${T.border}`,
        display: 'flex', alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'space-between',
      }}>
        {!collapsed && (
          <a href="/home" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: 17, fontWeight: 800, color: T.text, letterSpacing: '-0.5px' }}>
              dese<span style={{ color: T.lime }}>OS</span><span style={{ color: T.muted }}>.io</span>
            </span>
          </a>
        )}
        <button onClick={() => setCollapsed(c => !c)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.muted, padding: 4, borderRadius: 6, display: 'flex' }}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path d={collapsed ? 'M9 18l6-6-6-6' : 'M15 18l-6-6 6-6'} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '10px 6px', overflowY: 'auto' }}>
        {/* Dashboard */}
        {[{ href: '/home', label: 'Dashboard', exact: true, icon:
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="currentColor"/></svg>
        }].map(item => {
          const active = pathname === item.href
          return (
            <a key={item.href} href={item.href} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: collapsed ? '10px 14px' : '9px 10px',
              borderRadius: 8, marginBottom: 2, textDecoration: 'none',
              justifyContent: collapsed ? 'center' : 'flex-start',
              background: active ? `${T.purple}18` : 'transparent',
              color: active ? T.purple : T.muted,
              fontSize: 12, fontWeight: active ? 700 : 500,
            }}>
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </a>
          )
        })}

        <div style={{ height: 1, background: T.border, margin: '8px 4px 10px' }} />

        {SECTIONS.map(s => {
          const active = pathname.startsWith(s.href)
          return (
            <a key={s.id} href={s.href} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: collapsed ? '10px 14px' : '8px 10px',
              borderRadius: 8, marginBottom: 2, textDecoration: 'none',
              justifyContent: collapsed ? 'center' : 'flex-start',
              background: active ? `${s.color}15` : 'transparent',
              color: active ? s.color : T.muted,
              fontSize: 12, fontWeight: active ? 700 : 500,
              position: 'relative',
            }} title={collapsed ? s.label : undefined}>
              {active && <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: 3, height: 18, borderRadius: 2, background: s.color }} />}
              <span style={{ color: active ? s.color : T.muted, flexShrink: 0 }}>{s.icon}</span>
              {!collapsed && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.2 }}>{s.label}</div>
                  <div style={{ fontSize: 10, color: T.muted, marginTop: 1 }}>{s.subtitle}</div>
                </div>
              )}
            </a>
          )
        })}
      </nav>

      {/* Sign out */}
      <div style={{ padding: '8px 6px', borderTop: `1px solid ${T.border}` }}>
        <button
          onClick={async () => { await sb.auth.signOut(); router.push('/auth/sign-in') }}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: collapsed ? '10px 14px' : '9px 10px',
            borderRadius: 8, background: 'none', border: 'none',
            cursor: 'pointer', color: T.muted, fontSize: 12, fontWeight: 500,
            width: '100%', justifyContent: collapsed ? 'center' : 'flex-start',
          }}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" fill="currentColor"/>
          </svg>
          {!collapsed && <span>Salir</span>}
        </button>
      </div>
    </aside>
  )
}

function TopBar() {
  const pathname = usePathname()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const sb = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  useEffect(() => {
    sb.auth.getUser().then(({ data }) => {
      if (data.user) setUser({
        name: data.user.user_metadata?.full_name || data.user.email?.split('@')[0] || 'DeseOso',
        email: data.user.email || '',
      })
    })
  }, [])

  const current = SECTIONS.find(s => pathname.startsWith(s.href))
  return (
    <header style={{
      height: 58, background: T.surface, borderBottom: `1px solid ${T.border}`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px', position: 'sticky', top: 0, zIndex: 10,
    }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: T.text }}>{current?.label ?? 'Dashboard'}</div>
        <div style={{ fontSize: 11, color: T.muted }}>{current?.subtitle ?? 'Tu sistema operativo de negocio'}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: T.card, border: `1px solid ${T.border}`,
          borderRadius: 8, padding: '6px 12px',
        }}>
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
            <path d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" stroke={T.muted} strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input placeholder="Buscar..." style={{ background: 'none', border: 'none', outline: 'none', color: T.text, fontSize: 12, width: 130 }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: '50%', background: T.purple,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 700, color: '#fff',
          }}>
            {user?.name?.[0]?.toUpperCase() ?? 'D'}
          </div>
          {user && (
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: T.text, lineHeight: 1 }}>{user.name}</div>
              <div style={{ fontSize: 10, color: T.muted, marginTop: 2 }}>{user.email}</div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', minHeight: '100vh', background: T.bg,
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      color: T.text,
    }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <TopBar />
        <main style={{ flex: 1, padding: 24 }}>{children}</main>
      </div>
    </div>
  )
}

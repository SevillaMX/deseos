'use client'
import { useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
const T = { surface:'#111113', card:'#131315', border:'#1E1E22', text:'#FFFFFF', muted:'#888896' }
const C = '#14B8A6'

const KPI_CARDS = [
  { label:'Brand Score',    value:'40',    unit:'/100', color:'#7A5CFF', icon:'🧬', trend:'+5 esta semana' },
  { label:'Leads totales',  value:'0',     unit:'',     color:'#F97316', icon:'🎯', trend:'ADQUIERE no activo' },
  { label:'Conversión',     value:'—',     unit:'',     color:'#EC4899', icon:'📈', trend:'Sin datos aún' },
  { label:'MRR',            value:'$0',    unit:'',     color:C,         icon:'💰', trend:'Empieza con ADN' },
  { label:'Espacios activos',value:'3',    unit:'/6',   color:'#3B82F6', icon:'⚡', trend:'ADN · APRENDE · ADMIN' },
  { label:'Clientes activos',value:'0',    unit:'',     color:'#ACEC00', icon:'👥', trend:'Pendiente ASCIENDE' },
]

const MODULES = [
  { title:'Dashboard KPIs', icon:'📊', desc:'Vista ejecutiva de todas tus métricas en tiempo real', status:'active' },
  { title:'CRM Stats', icon:'📋', desc:'Pipeline de Buylievers — conversión por fase', status:'locked' },
  { title:'Reportes', icon:'📄', desc:'Reportes automáticos semanales y mensuales', status:'soon' },
  { title:'Revenue', icon:'💵', desc:'MRR, ARR, LTV, CAC — las métricas que importan', status:'locked' },
  { title:'Content Analytics', icon:'📱', desc:'Performance de contenido por plataforma', status:'locked' },
  { title:'Ad Performance', icon:'💸', desc:'ROAS, CPA, CTR de tus campañas de pauta', status:'locked' },
]

export default function AdministraPage() {
  const [user, setUser] = useState<string>('')
  const sb = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  useEffect(()=>{ sb.auth.getUser().then(({data})=>{ if(data.user) setUser(data.user.user_metadata?.full_name||'') }) },[])

  return (
    <div style={{ maxWidth:1000 }}>
      <div style={{ background:T.card, border:`1px solid ${C}30`, borderRadius:16, padding:'24px 28px', marginBottom:24, borderTop:`3px solid ${C}` }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <span style={{ fontSize:36 }}>📊</span>
            <div>
              <h1 style={{ fontSize:22, fontWeight:800, color:T.text, margin:0 }}>ADMINISTRA — Tu Control Center</h1>
              <p style={{ fontSize:13, color:T.muted, margin:'4px 0 0' }}>KPIs · Dashboards · CRM · Reportes</p>
            </div>
          </div>
          <span style={{ fontSize:10, background:`${C}20`, color:C, padding:'4px 10px', borderRadius:20, fontWeight:700 }}>SIEMPRE ACTIVO</span>
        </div>
      </div>

      {/* KPI Grid */}
      <h2 style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:'1px', marginBottom:12 }}>MÉTRICAS DEL OS</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:24 }}>
        {KPI_CARDS.map(k=>(
          <div key={k.label} style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:16, borderLeft:`3px solid ${k.color}` }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
              <span style={{ fontSize:20 }}>{k.icon}</span>
              <span style={{ fontSize:9, color:T.muted }}>{k.trend}</span>
            </div>
            <div style={{ fontSize:26, fontWeight:800, color:k.color }}>
              {k.value}<span style={{ fontSize:14, color:T.muted }}>{k.unit}</span>
            </div>
            <div style={{ fontSize:10, color:T.muted, marginTop:4 }}>{k.label}</div>
          </div>
        ))}
      </div>

      {/* OS Progress */}
      <h2 style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:'1px', marginBottom:12 }}>ESTADO DEL OS</h2>
      <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:'16px 20px', marginBottom:24 }}>
        {[
          { label:'APRENDE',    progress:20, color:'#3B82F6', status:'Activo' },
          { label:'ADN',        progress:40, color:'#7A5CFF', status:'Activo — en progreso' },
          { label:'ATRAE',      progress:0,  color:'#ACEC00', status:'Bloqueado — Brand Score < 60' },
          { label:'ADQUIERE',   progress:0,  color:'#F97316', status:'Bloqueado — Brand Score < 60' },
          { label:'ASCIENDE',   progress:0,  color:'#EC4899', status:'Bloqueado — sin clientes activos' },
          { label:'ADMINISTRA', progress:5,  color:C,          status:'Siempre activo' },
        ].map(s=>(
          <div key={s.label} style={{ marginBottom:14 }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
              <span style={{ fontSize:11, fontWeight:700, color:T.text }}>{s.label}</span>
              <span style={{ fontSize:10, color:T.muted }}>{s.status}</span>
            </div>
            <div style={{ height:4, background:T.border, borderRadius:4 }}>
              <div style={{ height:'100%', width:`${s.progress||2}%`, background:s.color, borderRadius:4, opacity:s.progress?1:0.3 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Modules */}
      <h2 style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:'1px', marginBottom:12 }}>MÓDULOS DE ADMINISTRACIÓN</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
        {MODULES.map(m=>(
          <div key={m.title} style={{ background:T.card, border:`1px solid ${m.status==='active'?C+'30':T.border}`, borderRadius:12, padding:16, opacity:m.status==='active'?1:0.55 }}>
            <div style={{ fontSize:22, marginBottom:8 }}>{m.icon}</div>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
              <div style={{ fontSize:12, fontWeight:700, color:T.text }}>{m.title}</div>
              <span style={{ fontSize:9, padding:'2px 7px', borderRadius:10, background:m.status==='active'?`${C}20`:'#333', color:m.status==='active'?C:T.muted, fontWeight:700 }}>
                {m.status==='active'?'Activo':m.status==='soon'?'Pronto':'Bloqueado'}
              </span>
            </div>
            <div style={{ fontSize:10, color:T.muted, lineHeight:1.4 }}>{m.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

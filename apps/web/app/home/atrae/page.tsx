'use client'
const T = { surface:'#111113', card:'#131315', border:'#1E1E22', text:'#FFFFFF', muted:'#888896' }
const C = '#ACEC00'

const MODULES = [
  { title:"Las 6 P's", icon:'📣', desc:'Plataforma · Pilar · Publicación · Promoción · Prospección · Pauta', status:'locked' },
  { title:'VICAS', icon:'🎬', desc:'Video · Imagen · Carrusel · Ads · Story — tu sistema de contenido', status:'locked' },
  { title:'Social Planner', icon:'📅', desc:'Publica en 8 plataformas desde un solo lugar con IA', status:'locked' },
  { title:'Meta Ads', icon:'💸', desc:'Campañas que convierten con UpHex + AI Sales Agent', status:'locked' },
  { title:'Lead Magnets', icon:'🧲', desc:'Micro-herramientas interactivas que capturan leads 24/7', status:'locked' },
  { title:'Prospecta', icon:'🔍', desc:'Pipeline de leads calificados — 10 Fases Comerciales', status:'locked' },
]

export default function AtraePage() {
  return (
    <div style={{ maxWidth:1000 }}>
      <div style={{ background:T.card, border:`1px solid ${C}30`, borderRadius:16, padding:'24px 28px', marginBottom:24, borderTop:`3px solid ${C}` }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <span style={{ fontSize:36 }}>🧲</span>
            <div>
              <h1 style={{ fontSize:22, fontWeight:800, color:T.text, margin:0 }}>ATRAE — Orgánico + Pagado</h1>
              <p style={{ fontSize:13, color:T.muted, margin:'4px 0 0' }}>Contenido · Lead Magnets · Meta Ads</p>
            </div>
          </div>
          <div style={{ background:'#333', borderRadius:20, padding:'8px 16px', textAlign:'center' }}>
            <div style={{ fontSize:11, fontWeight:700, color:T.muted }}>🔒 BLOQUEADO</div>
            <div style={{ fontSize:10, color:T.muted, marginTop:2 }}>Requiere Brand Score ≥60</div>
          </div>
        </div>
      </div>

      {/* Unlock progress */}
      <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:'20px 24px', marginBottom:24 }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:10 }}>
          <div>
            <div style={{ fontSize:14, fontWeight:700, color:T.text }}>¿Cómo desbloquear ATRAE?</div>
            <div style={{ fontSize:11, color:T.muted, marginTop:4 }}>Completa tu ADN hasta Brand Score 60/100</div>
          </div>
          <div style={{ textAlign:'right' }}>
            <span style={{ fontSize:22, fontWeight:800, color:C }}>40</span>
            <span style={{ fontSize:13, color:T.muted }}>/60</span>
          </div>
        </div>
        <div style={{ height:8, background:T.border, borderRadius:4 }}>
          <div style={{ height:'100%', width:'66%', background:`linear-gradient(90deg,#7A5CFF,${C})`, borderRadius:4 }} />
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:8 }}>
          <span style={{ fontSize:10, color:T.muted }}>Brand Score actual: 40</span>
          <span style={{ fontSize:10, color:C, fontWeight:700 }}>Faltan 20 puntos</span>
        </div>
      </div>

      {/* Modules preview */}
      <h2 style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:'1px', marginBottom:12 }}>QUÉ ENCONTRARÁS AQUÍ</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:24 }}>
        {MODULES.map(m=>(
          <div key={m.title} style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:16, opacity:0.6 }}>
            <div style={{ fontSize:24, marginBottom:8 }}>{m.icon}</div>
            <div style={{ fontSize:12, fontWeight:700, color:T.text, marginBottom:6 }}>{m.title}</div>
            <div style={{ fontSize:10, color:T.muted, lineHeight:1.4 }}>{m.desc}</div>
            <div style={{ marginTop:10 }}><span style={{ fontSize:9, color:T.muted }}>🔒 Bloqueado</span></div>
          </div>
        ))}
      </div>

      {/* CTA to ADN */}
      <div style={{ background:'#1a1a1f', border:`1px solid #7A5CFF30`, borderRadius:12, padding:'20px 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div>
          <div style={{ fontSize:14, fontWeight:700, color:T.text }}>Sube tu Brand Score para desbloquear</div>
          <div style={{ fontSize:11, color:T.muted, marginTop:4 }}>Completa tu ADN → llega a 60 puntos → ATRAE se activa</div>
        </div>
        <a href="/home/adn" style={{ background:'#7A5CFF', color:'#fff', border:'none', borderRadius:8, padding:'10px 20px', fontSize:12, fontWeight:700, cursor:'pointer', textDecoration:'none', display:'inline-block' }}>
          Ir a ADN →
        </a>
      </div>
    </div>
  )
}

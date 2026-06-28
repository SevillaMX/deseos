'use client'
const T = { surface:'#111113', card:'#131315', border:'#1E1E22', text:'#FFFFFF', muted:'#888896' }
const C = '#3B82F6'

const MODULES = [
  { title:'Community', icon:'🤝', status:'active', desc:'Tu tribu de soulpreneurs — conexiones reales, no likes' },
  { title:'Workshops', icon:'🎓', status:'active', desc:'Sesiones semanales en vivo con implementación inmediata' },
  { title:'Acelerador', icon:'⚡', status:'soon', desc:'Programa intensivo de 90 días para escalar tu negocio' },
  { title:'Biblioteca', icon:'📚', status:'active', desc:'Recursos, playbooks y templates listos para usar' },
  { title:'Eventos', icon:'🗓️', status:'soon', desc:'Meetups, cumbres y experiencias presenciales' },
  { title:'Mentoring', icon:'🦉', status:'soon', desc:'Sesiones 1:1 con Pepe y el equipo Dreamcubator' },
]

const UPCOMING = [
  { title:'Workshop: Funnel que vende solo', date:'Miér 2 Jul', time:'7pm CDMX', type:'Live' },
  { title:'Community Call semanal', date:'Vier 4 Jul', time:'6pm CDMX', type:'Call' },
  { title:'Masterclass: BranDNA Score 100', date:'Mar 8 Jul', time:'8pm CDMX', type:'Masterclass' },
]

export default function AprendePage() {
  return (
    <div style={{ maxWidth:1000 }}>
      <div style={{ background:T.card, border:`1px solid ${C}30`, borderRadius:16, padding:'24px 28px', marginBottom:24, borderTop:`3px solid ${C}` }}>
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <span style={{ fontSize:36 }}>📚</span>
          <div>
            <h1 style={{ fontSize:22, fontWeight:800, color:T.text, margin:0 }}>APRENDE — Comunidad y Escuela</h1>
            <p style={{ fontSize:13, color:T.muted, margin:'4px 0 0' }}>Community · Workshops · Accelerator</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginBottom:24 }}>
        {[{v:'247',l:'DeseOsos activos',c:C},{v:'12',l:'Workshops este mes',c:'#ACEC00'},{v:'89%',l:'Satisfacción',c:'#EC4899'},{v:'3',l:'Próximos eventos',c:'#F97316'}].map(s=>(
          <div key={s.l} style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:16 }}>
            <div style={{ fontSize:22, fontWeight:800, color:s.c }}>{s.v}</div>
            <div style={{ fontSize:10, color:T.muted, marginTop:2 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Modules */}
      <h2 style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:'1px', marginBottom:12 }}>MÓDULOS</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:24 }}>
        {MODULES.map(m=>(
          <div key={m.title} style={{ background:T.card, border:`1px solid ${m.status==='active'?C+'30':T.border}`, borderRadius:12, padding:16, opacity:m.status==='active'?1:0.6 }}>
            <div style={{ fontSize:24, marginBottom:8 }}>{m.icon}</div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:6 }}>
              <div style={{ fontSize:12, fontWeight:700, color:T.text }}>{m.title}</div>
              <span style={{ fontSize:9, padding:'2px 7px', borderRadius:10, background:m.status==='active'?`${C}20`:'#333', color:m.status==='active'?C:T.muted, fontWeight:700 }}>
                {m.status==='active'?'Activo':'Pronto'}
              </span>
            </div>
            <div style={{ fontSize:10, color:T.muted, lineHeight:1.4 }}>{m.desc}</div>
          </div>
        ))}
      </div>

      {/* Upcoming events */}
      <h2 style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:'1px', marginBottom:12 }}>PRÓXIMOS EVENTOS</h2>
      <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:24 }}>
        {UPCOMING.map(e=>(
          <div key={e.title} style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:'14px 18px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div>
              <div style={{ fontSize:13, fontWeight:700, color:T.text }}>{e.title}</div>
              <div style={{ fontSize:11, color:T.muted, marginTop:3 }}>{e.date} · {e.time}</div>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ fontSize:9, padding:'3px 9px', borderRadius:10, background:`${C}20`, color:C, fontWeight:700 }}>{e.type}</span>
              <button style={{ background:C, color:'#fff', border:'none', borderRadius:8, padding:'7px 14px', fontSize:11, fontWeight:700, cursor:'pointer' }}>Reservar</button>
            </div>
          </div>
        ))}
      </div>

      {/* Community CTA */}
      <div style={{ background:`${C}10`, border:`1px solid ${C}30`, borderRadius:12, padding:'20px 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div>
          <div style={{ fontSize:14, fontWeight:700, color:T.text }}>Únete a la comunidad de DeseOsos</div>
          <div style={{ fontSize:11, color:T.muted, marginTop:4 }}>247 soulpreneurs construyendo sus negocios juntos</div>
        </div>
        <button style={{ background:C, color:'#fff', border:'none', borderRadius:8, padding:'10px 20px', fontSize:12, fontWeight:700, cursor:'pointer' }}>
          Entrar a Community →
        </button>
      </div>
    </div>
  )
}

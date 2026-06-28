'use client'
const T = { surface:'#111113', card:'#131315', border:'#1E1E22', text:'#FFFFFF', muted:'#888896' }
const C = '#EC4899'

const MODULES = [
  { title:'Onboarding', icon:'🚀', desc:'Proceso de bienvenida para nuevos clientes que impresiona desde el día 1', status:'locked' },
  { title:'Cursos', icon:'🎓', desc:'Entrega tu conocimiento en módulos con consumo rastreable', status:'locked' },
  { title:'Comunidad Clientes', icon:'👥', desc:'Espacio privado donde tus clientes conectan y se ayudan entre sí', status:'locked' },
  { title:'Consulting', icon:'💼', desc:'Sistema de sesiones 1:1 y grupales con agendamiento automático', status:'locked' },
  { title:'Mentoring', icon:'🦉', desc:'Programa de acompañamiento de alto ticket con accountability', status:'locked' },
  { title:'Ascensión Automática', icon:'⬆️', desc:'Flujos que llevan a clientes de low a high ticket sin fricción', status:'locked' },
]

export default function AscendePage() {
  return (
    <div style={{ maxWidth:1000 }}>
      <div style={{ background:T.card, border:`1px solid ${C}30`, borderRadius:16, padding:'24px 28px', marginBottom:24, borderTop:`3px solid ${C}` }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <span style={{ fontSize:36 }}>🚀</span>
            <div>
              <h1 style={{ fontSize:22, fontWeight:800, color:T.text, margin:0 }}>ASCIENDE — Tu Delivery</h1>
              <p style={{ fontSize:13, color:T.muted, margin:'4px 0 0' }}>Cursos · Comunidad · Consulting · Mentoring</p>
            </div>
          </div>
          <div style={{ background:'#333', borderRadius:20, padding:'8px 16px', textAlign:'center' }}>
            <div style={{ fontSize:11, fontWeight:700, color:T.muted }}>🔒 BLOQUEADO</div>
            <div style={{ fontSize:10, color:T.muted, marginTop:2 }}>Requiere clientes activos</div>
          </div>
        </div>
      </div>

      {/* Unlock path */}
      <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:'20px 24px', marginBottom:24 }}>
        <div style={{ fontSize:14, fontWeight:700, color:T.text, marginBottom:12 }}>Ruta para desbloquear ASCIENDE</div>
        <div style={{ display:'flex', gap:8, alignItems:'center', flexWrap:'wrap' }}>
          {[
            { step:'1', label:'ADN ≥60%', done:false, color:'#7A5CFF' },
            { step:'→', label:'', done:false, color:T.muted },
            { step:'2', label:'ADQUIERE activo', done:false, color:'#F97316' },
            { step:'→', label:'', done:false, color:T.muted },
            { step:'3', label:'1er cliente activo', done:false, color:C },
            { step:'→', label:'', done:false, color:T.muted },
            { step:'✓', label:'ASCIENDE', done:false, color:C },
          ].map((s,i)=>(
            <div key={i} style={{ display:'flex', alignItems:'center', gap:6 }}>
              {s.step!=='→' ? (
                <div style={{ background:T.surface, border:`1px solid ${s.color}40`, borderRadius:8, padding:'8px 14px', opacity:0.7 }}>
                  <div style={{ fontSize:10, color:s.color, fontWeight:700 }}>PASO {s.step}</div>
                  <div style={{ fontSize:11, color:T.text, fontWeight:700 }}>{s.label}</div>
                </div>
              ) : <div style={{ fontSize:18, color:T.muted }}>→</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Modules */}
      <h2 style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:'1px', marginBottom:12 }}>QUÉ ENCONTRARÁS AQUÍ</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:24 }}>
        {MODULES.map(m=>(
          <div key={m.title} style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:16, opacity:0.6 }}>
            <div style={{ fontSize:24, marginBottom:8 }}>{m.icon}</div>
            <div style={{ fontSize:12, fontWeight:700, color:T.text, marginBottom:6 }}>{m.title}</div>
            <div style={{ fontSize:10, color:T.muted, lineHeight:1.4 }}>{m.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ background:`${C}08`, border:`1px solid ${C}20`, borderRadius:12, padding:'16px 20px' }}>
        <div style={{ fontSize:12, color:T.muted, lineHeight:1.6 }}>
          <span style={{ color:C, fontWeight:700 }}>ASCIENDE</span> se desbloquea automáticamente cuando tienes tu primer cliente activo en ADQUIERE.
          El sistema detecta el hito y activa todos los módulos de delivery.
        </div>
      </div>
    </div>
  )
}

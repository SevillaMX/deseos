'use client'
const T = { surface:'#111113', card:'#131315', border:'#1E1E22', text:'#FFFFFF', muted:'#888896' }
const C = '#7A5CFF'

const MODULES = [
  { title:'Brand Builder', icon:'🏗️', progress:40, desc:'Construye tu identidad desde cero con preguntas guiadas' },
  { title:"Las 6 M's", icon:'⚙️', progress:25, desc:'Mercado · Mensaje · Medio · Momento · Mecanismo · Modelo' },
  { title:"8 I's del ADN", icon:'🧬', progress:15, desc:'8 dimensiones de tu marca personal activa' },
  { title:'Brand Score', icon:'📊', progress:40, desc:'Métrica viva de tu marca — de 0 a 100 puntos' },
  { title:'SoulCode', icon:'🌀', progress:0, desc:'Tu arquetipo, misión y valores fundacionales' },
  { title:'Avatar ICP', icon:'🎯', progress:0, desc:'Floor, Ceiling y Bajo el Piso de tu cliente ideal' },
]

const SIX_MS = [
  { l:'Mercado', q:'¿A quién sirves?', c:'#7A5CFF' },
  { l:'Mensaje', q:'¿Qué promesa haces?', c:'#EC4899' },
  { l:'Medio', q:'¿Dónde está tu audiencia?', c:'#3B82F6' },
  { l:'Momento', q:'¿Cuándo están listos?', c:'#F97316' },
  { l:'Mecanismo', q:'¿Cómo entregas?', c:'#14B8A6' },
  { l:'Modelo', q:'¿Cómo monetizas?', c:'#ACEC00' },
]

export default function ADNPage() {
  return (
    <div style={{ maxWidth:1000 }}>
      {/* Header */}
      <div style={{ background:T.card, border:`1px solid ${C}30`, borderRadius:16, padding:'24px 28px', marginBottom:24, borderTop:`3px solid ${C}` }}>
        <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:16 }}>
          <span style={{ fontSize:36 }}>🧬</span>
          <div>
            <h1 style={{ fontSize:22, fontWeight:800, color:T.text, margin:0 }}>ADN — Tu Marca</h1>
            <p style={{ fontSize:13, color:T.muted, margin:'4px 0 0' }}>Quién eres · A quién sirves · Qué vendes</p>
          </div>
        </div>
        <div style={{ display:'flex', gap:24 }}>
          {[{v:'40',l:'Brand Score',c:C},{v:'3/6',l:'Módulos activos',c:'#ACEC00'},{v:'25%',l:'Completado',c:'#3B82F6'}].map(s=>(
            <div key={s.l} style={{ textAlign:'center' }}>
              <div style={{ fontSize:24, fontWeight:800, color:s.c }}>{s.v}</div>
              <div style={{ fontSize:10, color:T.muted }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:'16px 20px', marginBottom:20 }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
          <span style={{ fontSize:12, fontWeight:700, color:T.text }}>Brand Score</span>
          <span style={{ fontSize:12, color:C, fontWeight:800 }}>40 / 100</span>
        </div>
        <div style={{ height:6, background:T.border, borderRadius:4 }}>
          <div style={{ height:'100%', width:'40%', background:`linear-gradient(90deg,${C},#ACEC00)`, borderRadius:4 }} />
        </div>
        <p style={{ fontSize:11, color:T.muted, margin:'8px 0 0' }}>Completa los módulos para desbloquear ATRAE y ADQUIERE (requiere ≥60).</p>
      </div>

      {/* Modules */}
      <h2 style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:'1px', marginBottom:12 }}>MÓDULOS</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:24 }}>
        {MODULES.map(m=>(
          <div key={m.title} style={{ background:T.card, border:`1px solid ${m.progress?C+'30':T.border}`, borderRadius:12, padding:16, opacity:m.progress||1 }}>
            <div style={{ fontSize:22, marginBottom:8 }}>{m.icon}</div>
            <div style={{ fontSize:12, fontWeight:700, color:T.text, marginBottom:4 }}>{m.title}</div>
            <div style={{ fontSize:10, color:T.muted, lineHeight:1.4, marginBottom:10 }}>{m.desc}</div>
            {m.progress>0 ? (
              <>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:4 }}>
                  <span style={{ fontSize:9, color:T.muted }}>Progreso</span>
                  <span style={{ fontSize:9, color:C, fontWeight:700 }}>{m.progress}%</span>
                </div>
                <div style={{ height:3, background:T.border, borderRadius:4 }}>
                  <div style={{ height:'100%', width:`${m.progress}%`, background:C, borderRadius:4 }} />
                </div>
              </>
            ) : <span style={{ fontSize:9, color:T.muted }}>Próximamente</span>}
          </div>
        ))}
      </div>

      {/* 6 M's */}
      <h2 style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:'1px', marginBottom:12 }}>LAS 6 M'S DE TU MARCA</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginBottom:24 }}>
        {SIX_MS.map(m=>(
          <div key={m.l} style={{ background:T.card, border:`1px solid ${m.c}25`, borderRadius:10, padding:14, borderLeft:`3px solid ${m.c}` }}>
            <div style={{ fontSize:12, fontWeight:800, color:m.c, marginBottom:4 }}>{m.l}</div>
            <div style={{ fontSize:10, color:T.muted }}>{m.q}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background:`${C}10`, border:`1px solid ${C}30`, borderRadius:12, padding:'20px 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div>
          <div style={{ fontSize:14, fontWeight:700, color:T.text }}>Empieza con el Brand Builder</div>
          <div style={{ fontSize:11, color:T.muted, marginTop:4 }}>10 preguntas · 15 minutos · Tu identidad lista</div>
        </div>
        <button style={{ background:C, color:'#fff', border:'none', borderRadius:8, padding:'10px 20px', fontSize:12, fontWeight:700, cursor:'pointer' }}>
          Comenzar →
        </button>
      </div>
    </div>
  )
}

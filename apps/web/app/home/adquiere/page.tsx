'use client'
const T = { surface:'#111113', card:'#131315', border:'#1E1E22', text:'#FFFFFF', muted:'#888896' }
const C = '#F97316'

const MODULES = [
  { title:'MagiQuest 34Q', icon:'🧙', desc:'34 preguntas que revelan el DeseO de tu prospecto y personalizan su journey', status:'locked' },
  { title:'DMChamp', icon:'🤖', desc:'Tu AI SuperSeller — cierra ventas 24/7 sin llamadas en WhatsApp', status:'locked' },
  { title:'BRM — Buyliever CRM', icon:'📊', desc:'10 Fases Comerciales para mover cada lead de interés a cliente activo', status:'locked' },
  { title:'Buyliever Journey', icon:'🗺️', desc:'Funnel automático: Ad → BRM → MVC → Cerrado → Onboarding', status:'locked' },
  { title:'5-Day MVC', icon:'📧', desc:'Secuencia de 5 mensajes que nutren y cierran sin presión', status:'locked' },
  { title:'Lead Scoring', icon:'⭐', desc:'4 ejes de calificación para priorizar a tus Buylievers calientes', status:'locked' },
]

const FASES = [
  { n:'01', label:'Prospectar', color:'#7A5CFF' },
  { n:'02', label:'Contactar', color:'#3B82F6' },
  { n:'03', label:'Conectar', color:'#14B8A6' },
  { n:'04', label:'Calificar', color:'#ACEC00' },
  { n:'05', label:'Presentar', color:'#F97316' },
  { n:'06', label:'Proponer', color:'#EC4899' },
  { n:'07', label:'Negociar', color:'#EF4444' },
  { n:'08', label:'Cerrar', color:'#10B981' },
  { n:'09', label:'Onboarding', color:'#6366F1' },
  { n:'10', label:'Ascender', color:'#D4AF37' },
]

export default function AdquierePage() {
  return (
    <div style={{ maxWidth:1000 }}>
      <div style={{ background:T.card, border:`1px solid ${C}30`, borderRadius:16, padding:'24px 28px', marginBottom:24, borderTop:`3px solid ${C}` }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <span style={{ fontSize:36 }}>💰</span>
            <div>
              <h1 style={{ fontSize:22, fontWeight:800, color:T.text, margin:0 }}>ADQUIERE — Tu Funnel</h1>
              <p style={{ fontSize:13, color:T.muted, margin:'4px 0 0' }}>MagiQuest · DMChamp · BRM · 10 Fases</p>
            </div>
          </div>
          <div style={{ background:'#333', borderRadius:20, padding:'8px 16px', textAlign:'center' }}>
            <div style={{ fontSize:11, fontWeight:700, color:T.muted }}>🔒 BLOQUEADO</div>
            <div style={{ fontSize:10, color:T.muted, marginTop:2 }}>Requiere Brand Score ≥60</div>
          </div>
        </div>
      </div>

      {/* 10 Fases preview */}
      <h2 style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:'1px', marginBottom:12 }}>LAS 10 FASES COMERCIALES</h2>
      <div style={{ display:'flex', gap:6, marginBottom:24, flexWrap:'wrap' }}>
        {FASES.map(f=>(
          <div key={f.n} style={{ background:T.card, border:`1px solid ${f.color}30`, borderRadius:10, padding:'10px 14px', opacity:0.6, flex:'0 0 auto' }}>
            <div style={{ fontSize:9, color:f.color, fontWeight:700, marginBottom:2 }}>FASE {f.n}</div>
            <div style={{ fontSize:11, fontWeight:700, color:T.text }}>{f.label}</div>
          </div>
        ))}
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

      <div style={{ background:'#1a1a1f', border:`1px solid #7A5CFF30`, borderRadius:12, padding:'20px 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div>
          <div style={{ fontSize:14, fontWeight:700, color:T.text }}>Completa ADN para activar tu funnel</div>
          <div style={{ fontSize:11, color:T.muted, marginTop:4 }}>Brand Score 60+ → ADQUIERE se desbloquea automáticamente</div>
        </div>
        <a href="/home/adn" style={{ background:'#7A5CFF', color:'#fff', border:'none', borderRadius:8, padding:'10px 20px', fontSize:12, fontWeight:700, cursor:'pointer', textDecoration:'none', display:'inline-block' }}>
          Ir a ADN →
        </a>
      </div>
    </div>
  )
}

'use client'
import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: '#0B0B0C',
  border: '1px solid #2A2A2A',
  borderRadius: 10,
  color: '#fff',
  fontSize: 15,
  outline: 'none',
  boxSizing: 'border-box' as const,
  transition: 'border-color 0.15s',
}

export default function SignInPage() {
  const [mode, setMode]           = useState<'signin' | 'signup'>('signin')
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const [name, setName]           = useState('')
  const [error, setError]         = useState('')
  const [success, setSuccess]     = useState('')
  const [loading, setLoading]     = useState(false)
  const router = useRouter()

  const sb = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    if (mode === 'signin') {
      const { error } = await sb.auth.signInWithPassword({ email, password })
      if (error) {
        setError(error.message)
        setLoading(false)
      } else {
        router.push('/home')
        router.refresh()
      }
    } else {
      const { error } = await sb.auth.signUp({
        email,
        password,
        options: { data: { full_name: name } },
      })
      if (error) {
        setError(error.message)
        setLoading(false)
      } else {
        setSuccess('¡Cuenta creada! Revisa tu email para confirmar, o entra directo si la confirmación está desactivada.')
        setLoading(false)
        // Try to auto-sign-in
        setTimeout(async () => {
          const { error: signInErr } = await sb.auth.signInWithPassword({ email, password })
          if (!signInErr) {
            router.push('/home')
            router.refresh()
          }
        }, 1500)
      }
    }
  }

  const toggle = () => {
    setMode(m => m === 'signin' ? 'signup' : 'signin')
    setError('')
    setSuccess('')
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0B0B0C',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <div style={{
        background: '#131315',
        border: '1px solid #222',
        borderRadius: 20,
        padding: '48px 40px',
        width: '100%',
        maxWidth: 400,
        boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
      }}>
        {/* Logo */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-1px', color: '#fff' }}>
            dese<span style={{ color: '#ACEC00' }}>OS</span><span style={{ color: '#666' }}>.io</span>
          </div>
          <p style={{ color: '#666', margin: '8px 0 0', fontSize: 15 }}>
            {mode === 'signin' ? 'Tu sistema operativo de negocio' : 'Crea tu cuenta gratis'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Name — solo en signup */}
          {mode === 'signup' && (
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', color: '#888', marginBottom: 6, fontSize: 13, fontWeight: 500 }}>
                NOMBRE
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="Tu nombre"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#7A5CFF'}
                onBlur={e => e.target.style.borderColor = '#2A2A2A'}
              />
            </div>
          )}

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', color: '#888', marginBottom: 6, fontSize: 13, fontWeight: 500 }}>
              EMAIL
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="tu@email.com"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#7A5CFF'}
              onBlur={e => e.target.style.borderColor = '#2A2A2A'}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', color: '#888', marginBottom: 6, fontSize: 13, fontWeight: 500 }}>
              CONTRASEÑA
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              minLength={6}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#7A5CFF'}
              onBlur={e => e.target.style.borderColor = '#2A2A2A'}
            />
          </div>

          {error && (
            <div style={{
              color: '#FF6B6B',
              background: 'rgba(255,107,107,0.1)',
              border: '1px solid rgba(255,107,107,0.2)',
              borderRadius: 8,
              padding: '10px 14px',
              marginBottom: 16,
              fontSize: 14,
            }}>
              {error}
            </div>
          )}

          {success && (
            <div style={{
              color: '#ACEC00',
              background: 'rgba(172,236,0,0.08)',
              border: '1px solid rgba(172,236,0,0.2)',
              borderRadius: 8,
              padding: '10px 14px',
              marginBottom: 16,
              fontSize: 14,
            }}>
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              background: loading ? '#3D2E99' : '#7A5CFF',
              border: 'none',
              borderRadius: 10,
              color: '#fff',
              fontSize: 15,
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.15s',
            }}
          >
            {loading
              ? (mode === 'signin' ? 'Entrando...' : 'Creando cuenta...')
              : (mode === 'signin' ? 'Entrar al OS →' : 'Crear cuenta →')}
          </button>
        </form>

        {/* Toggle */}
        <p style={{ textAlign: 'center', marginTop: 24, color: '#555', fontSize: 14 }}>
          {mode === 'signin' ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
          <button
            onClick={toggle}
            style={{
              background: 'none',
              border: 'none',
              color: '#ACEC00',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 600,
              padding: 0,
            }}
          >
            {mode === 'signin' ? 'Crear cuenta' : 'Iniciar sesión'}
          </button>
        </p>
      </div>
    </div>
  )
}

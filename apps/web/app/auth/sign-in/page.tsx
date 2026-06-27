'use client'
import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const router = useRouter()

  const sb = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await sb.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/home')
      router.refresh()
    }
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
          <div style={{
            fontSize: 32,
            fontWeight: 800,
            letterSpacing: '-1px',
            color: '#fff',
          }}>
            dese<span style={{ color: '#ACEC00' }}>OS</span><span style={{ color: '#666' }}>.io</span>
          </div>
          <p style={{ color: '#666', margin: '8px 0 0', fontSize: 15 }}>
            Tu sistema operativo de negocio
          </p>
        </div>

        <form onSubmit={handleSignIn}>
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
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#0B0B0C',
                border: '1px solid #2A2A2A',
                borderRadius: 10,
                color: '#fff',
                fontSize: 15,
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.15s',
              }}
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
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#0B0B0C',
                border: '1px solid #2A2A2A',
                borderRadius: 10,
                color: '#fff',
                fontSize: 15,
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.15s',
              }}
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
            {loading ? 'Entrando...' : 'Entrar al OS →'}
          </button>
        </form>
      </div>
    </div>
  )
}

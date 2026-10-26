import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
export default function Layout() {
  // Micro-interacción global: el brillo dorado de las tarjetas `.glow` sigue al cursor
  useEffect(() => {
    const move = e => { const el = e.target.closest?.('.glow'); if (!el) return; const r = el.getBoundingClientRect(); el.style.setProperty('--mx', `${e.clientX - r.left}px`); el.style.setProperty('--my', `${e.clientY - r.top}px`) }
    document.addEventListener('mousemove', move); return () => document.removeEventListener('mousemove', move)
  }, [])
  return (<div className="flex min-h-screen flex-col">
    <Header /><main className="flex-1"><Outlet /></main><Footer /><WhatsAppButton />
  </div>)
}

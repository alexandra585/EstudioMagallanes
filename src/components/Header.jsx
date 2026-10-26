import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Siren, ChevronDown } from 'lucide-react'
import { NAV } from '../config/site'

export function Logo() {
  return (<Link to="/" className="flex items-center gap-3">
    <img src="/logo.png" alt="Logo M&M Abogados" className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/50" />
    <span className="leading-tight"><span className="block font-serif text-xl font-bold text-gold">M&M Abogados</span>
      <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-slate-300">Magallanes – Montero</span></span>
  </Link>)
}
export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const f = () => setScrolled(window.scrollY > 24); f(); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f) }, [])
  const link = ({ isActive }) => `relative py-2 text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-gold after:transition-all hover:text-gold ${isActive ? 'text-gold after:w-full' : 'text-white after:w-0 hover:after:w-full'}`
  return (<header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
    <div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 transition-all duration-500 ${scrolled ? 'h-16 border-gold/30 bg-navy/70 shadow-lux backdrop-blur-2xl' : 'h-20 border-white/10 bg-white/[0.04] backdrop-blur-md'}`}>
      <Logo />
      <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
        {NAV.map(n => n.children ? (
          <div key={n.to} className="group relative">
            <NavLink to={n.to} className={link}><span className="inline-flex items-center gap-1">{n.label}<ChevronDown size={14} className="transition group-hover:rotate-180" /></span></NavLink>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="glass-card overflow-hidden rounded-2xl !bg-navy/80">
                {n.children.map(c => <Link key={c.to} to={c.to} className="block px-5 py-3 text-sm text-white transition hover:bg-white/10 hover:pl-7 hover:text-gold">{c.label}</Link>)}</div></div>
          </div>) : (<NavLink key={n.to} to={n.to} end={n.to === '/'} className={link}>{n.label}</NavLink>))}
      </nav>
      <Link to="/contacto" className="btn-gold hidden !rounded-full !px-5 !py-2.5 md:inline-flex"><Siren size={16} /> Consulta Urgente</Link>
      <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">{open ? <X /> : <Menu />}</button>
    </div>
    {open && (<nav className="glass-card mx-auto mt-2 max-w-6xl space-y-1 rounded-3xl !bg-navy/90 p-4 md:hidden">
      {NAV.flatMap(n => [n, ...(n.children || [])]).map(n => (
        <NavLink key={n.to} to={n.to} end={n.to === '/'} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 text-white hover:bg-white/10 hover:text-gold">{n.label}</NavLink>))}
      <Link to="/contacto" onClick={() => setOpen(false)} className="btn-gold mt-2 w-full !rounded-full">Consulta Urgente</Link>
    </nav>)}
  </header>)
}

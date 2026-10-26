import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Lock } from 'lucide-react'
import { NAV, SITE } from '../config/site'
import { Logo } from './Header'
export default function Footer() {
  return (<footer className="relative overflow-hidden bg-[#08121d] text-slate-300">
    <div className="bronze-line" />
    <span className="text-outline pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none font-serif text-[34vw] font-bold leading-none opacity-30" aria-hidden="true">M&M</span>
    <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-12">
      <div className="md:col-span-5"><Logo />
        <p className="text-gold-grad mt-6 font-serif text-3xl italic">“{SITE.tagline}”</p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">Firma jurídica multidisciplinaria especializada en defensa penal de alta complejidad, derecho familiar, civil, corporativo y patrimonial en Lima.</p></div>
      <div className="md:col-span-3"><h3 className="mb-5 font-serif text-lg !text-white">Navegación</h3>
        <ul className="space-y-3 text-sm">{NAV.map(n => <li key={n.to}><Link className="inline-block transition hover:translate-x-1 hover:text-gold" to={n.to}>{n.label}</Link></li>)}</ul></div>
      <div className="md:col-span-4"><h3 className="mb-5 font-serif text-lg !text-white">Contacto Directo</h3>
        <ul className="space-y-4 text-sm">
          <li className="flex gap-3 break-all"><Mail size={16} className="mt-0.5 shrink-0 text-gold" />{SITE.email}</li>
          <li className="flex gap-3"><Phone size={16} className="text-gold" />{SITE.phone}</li>
          <li className="flex gap-3"><MapPin size={16} className="text-gold" />Independencia y Cercado de Lima</li></ul></div>
    </div>
    <div className="relative border-t border-white/10 py-5"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs text-slate-500 sm:flex-row">
      <span>© {new Date().getFullYear()} {SITE.legalName}. Todos los derechos reservados.</span>
      <Link to="/admin/blog" className="inline-flex items-center gap-1 hover:text-gold"><Lock size={12} />Acceso administrativo</Link></div></div>
  </footer>)
}

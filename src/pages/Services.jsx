import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Phone, MessageSquare } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import PageHero from '../components/PageHero'
import { SERVICES, STEPS, SITE } from '../config/site'

export default function Services() {
  return (<>
    <SEO title="Especialidades Legales" description="Derecho Penal, Familia, Civil, Laboral, Corporativo e Inmobiliario. Defensa estratégica y atención 24/7 en Lima." />
    <PageHero ghost="Práctica" title={<>Nuestras áreas de <em className="text-gold">práctica legal</em></>} text="Representación experta y defensa estratégica en las ramas más críticas del derecho peruano, con rigor doctrinal y determinación probatoria." />

    <section className="bg-gray-50 py-24"><div className="mx-auto max-w-6xl px-4">
      <SectionTitle kicker="Especialidades centrales" title="Disciplinas dirigidas por socios especialistas" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (<Reveal key={s.title} delay={(i % 3) * 0.1}><article className="glow group relative flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lux">
          <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition duration-500 group-hover:scale-x-100" />
          <div className="flex items-start justify-between"><s.icon size={38} strokeWidth={1.25} className="text-gold" />
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${i === 0 ? 'bg-red-50 text-red-700' : 'bg-gray-100 text-slate-500'}`}>{s.badge}</span></div>
          <h2 className="mt-5 text-2xl font-semibold">{s.title}</h2><p className="mt-2 text-sm text-slate-500">{s.text}</p>
          <ul className="mb-7 mt-5 flex-1 space-y-2.5 text-sm text-slate-600">{s.items.map(it => <li key={it} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold" />{it}</li>)}</ul>
          <Link to="/contacto" className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm font-semibold text-navy transition group-hover:text-bronze">Consultar caso <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
        </article></Reveal>))}</div></div></section>

    <section className="bg-white py-24"><div className="mx-auto max-w-6xl px-4">
      <SectionTitle kicker="Eficacia comprobada" title="Metodología de Acción Procesal" text="Un protocolo forense estructurado que elimina la incertidumbre y maximiza las probabilidades de éxito en cada instancia." />
      <ol className="relative grid gap-10 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent lg:block" />
        {STEPS.map((s, i) => (<Reveal key={s.n} delay={i * 0.1}><li className="relative text-center">
          <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-white font-serif text-lg text-bronze">{s.n}</span>
          <p className="mt-4 text-xs text-bronze">{s.k}</p><h3 className="mt-1 text-xl font-semibold">{s.t}</h3><p className="mt-2 text-sm text-slate-500">{s.d}</p></li></Reveal>))}</ol></div></section>

    <section className="relative bg-navy py-20"><div className="absolute inset-x-0 top-0 gold-line" />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 lg:flex-row lg:items-center">
        <div className="max-w-xl"><h2 className="text-3xl !text-white md:text-4xl">¿Enfrenta una urgencia legal? <em className="text-gold">Estamos disponibles.</em></h2>
          <p className="mt-3 text-slate-300">Atención prioritaria 24/7 en Lima y Callao: flagrancias, detenciones policiales y desalojos imprevistos.</p></div>
        <div className="flex flex-col gap-3 sm:flex-row"><a href={`tel:+${SITE.phoneRaw}`} className="btn-gold !rounded-sm shadow-gold"><Phone size={16} /> Llamar ({SITE.phone})</a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost !rounded-sm"><MessageSquare size={16} /> WhatsApp jurídico</a></div></div></section>
  </>)
}

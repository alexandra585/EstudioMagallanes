import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Quote } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import PageHero from '../components/PageHero'
import Placeholder from '../components/Placeholder'
import { STATS, TEAM, VALUES, IMAGES } from '../config/site'

export default function About() {
  const { lead, others } = TEAM
  return (<>
    <SEO title="Nosotros – Nuestro Equipo Legal" description="Conoce al equipo de abogados de Magallanes - Montero: más de 18 años de experiencia en litigios penales, familia y derecho corporativo en Lima." />
    <PageHero ghost="Equipo" title="Conoce a nuestro equipo legal" text="Protegemos los derechos y el patrimonio de nuestros clientes con una práctica jurídica estratégica, implacable y de los más rigurosos estándares éticos." />

    <section id="quienes" className="scroll-mt-24 bg-white py-24"><div className="mx-auto grid max-w-6xl items-start gap-14 px-4 lg:grid-cols-5">
      <Reveal className="lg:col-span-3">
        <p className="font-serif italic text-bronze">¿Quiénes somos?</p>
        <h2 className="mt-3 text-4xl font-semibold md:text-5xl">La defensa en causas de extrema dificultad exige una larga experiencia</h2>
        <p className="mt-6 leading-relaxed text-slate-500">Somos un estudio boutique con trayectoria en litigios penales de alta complejidad, familia, civil y corporativo. Nuestra práctica combina estudio doctrinario, estrategia procesal y trato humano.</p></Reveal>
      <Reveal delay={0.1} className="lg:col-span-2"><dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-gray-200">
        {STATS.map(s => <div key={s.l} className="bg-gray-50 p-6"><dt className="font-serif text-4xl text-navy">{s.v}</dt><dd className="mt-1 text-xs text-slate-500">{s.l}</dd></div>)}</dl></Reveal>
    </div></section>

    {/* FRANJA OSCURA: Misión y Visión */}
    <section className="relative bg-navy py-24"><div className="absolute inset-x-0 top-0 gold-line" />
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle light kicker="Nuestra filosofía de práctica" title="Misión y Visión" />
        <div className="grid gap-6 md:grid-cols-2">
          {[[Target, 'Misión', 'Proveer patrocinio legal del más alto nivel mediante un estudio exhaustivo del ordenamiento procesal y sustantivo, resguardando la libertad, el honor y el acervo patrimonial de nuestros patrocinados.'],
            [Eye, 'Visión', 'Consolidarnos como el bufete boutique referente en el Perú en la resolución de litigios penales y corporativos de alta complejidad, reconocidos por nuestra integridad deontológica y precisión procesal.']].map(([I, t, d], i) => (
            <Reveal key={t} delay={i * 0.12}><div className="bronze-card glow !rounded-3xl h-full text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold"><I size={24} strokeWidth={1.5} /></span>
              <h3 className="mt-5 text-2xl !text-white">{t}</h3><p className="mt-4 text-sm leading-relaxed text-slate-300">{d}</p></div></Reveal>))}</div></div></section>

    <section id="equipo" className="scroll-mt-24 bg-gray-50 py-24"><div className="mx-auto max-w-6xl px-4">
      <SectionTitle kicker="Cuerpo de letrados" title="Nuestro Equipo Legal" text="Profesionales formados en las más exigentes cortes y comprometidos con una defensa técnica implacable." />
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal><article className="glow group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lux">
          <div className="relative overflow-hidden"><Placeholder src={IMAGES.team} label={lead.name} className="aspect-[4/3] w-full transition duration-700 group-hover:scale-105" />
            <span className="absolute bottom-0 left-0 bg-gold px-4 py-1.5 text-xs font-semibold text-navy">{lead.tag}</span></div>
          <div className="p-8"><h3 className="text-3xl font-semibold">{lead.name}</h3><p className="mt-1 text-bronze">{lead.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">{lead.text}</p>
            <Link to="/contacto" className="mt-6 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-semibold text-navy transition hover:gap-4">Contactar <ArrowRight size={14} /></Link></div></article></Reveal>
        <div className="space-y-4">
          {others.map((m, i) => (<Reveal key={m.name} delay={i * 0.1}><article className="glow group flex gap-5 rounded-3xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lux">
            <Placeholder label={m.name} className="h-36 w-28 shrink-0 sm:w-36" />
            <div className="py-1"><span className="text-xs text-bronze">{m.tag}</span><h3 className="text-xl font-semibold">{m.name}</h3><p className="text-xs font-semibold text-slate-400">{m.role}</p>
              <p className="mt-2 text-sm text-slate-500">{m.text}</p></div></article></Reveal>))}</div></div></div></section>

    <section className="bg-white py-24"><div className="mx-auto max-w-6xl px-4">
      <SectionTitle kicker="Ética y conducta" title="Valores Institucionales" />
      <div className="grid gap-px overflow-hidden rounded-sm bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((v, i) => <Reveal key={v.t} delay={i * 0.08}><div className="h-full bg-white p-8 transition hover:bg-gray-50"><h3 className="text-xl font-semibold">{v.t}</h3><p className="mt-3 text-sm text-slate-500">{v.d}</p></div></Reveal>)}</div>
      <Reveal><div className="relative mt-16 overflow-hidden rounded-sm bg-navy p-12 text-center">
        <Quote className="mx-auto mb-4 text-gold" />
        <blockquote className="mx-auto max-w-3xl font-serif text-2xl italic leading-snug text-white md:text-3xl">“La abogacía no es un simple oficio de formas, sino un sacerdocio cívico donde la libertad y la justicia solo se conquistan con preparación técnica implacable y honor intachable.”</blockquote>
        <p className="mt-6 text-sm text-gold">Estudio Jurídico Magallanes – Montero (M&M)</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/contacto" className="btn-gold !rounded-sm">Agendar audiencia privada</Link><Link to="/contacto" className="btn-ghost !rounded-sm">Enviar consulta escrita</Link></div></div></Reveal>
    </div></section>
  </>)
}

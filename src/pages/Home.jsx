import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, MessageSquare, Phone, Star, Quote, ShieldCheck, Clock, ChevronDown } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import Placeholder from '../components/Placeholder'
import VideoBackdrop from '../components/VideoBackdrop'
import Marquee from '../components/Marquee'
import Counter from '../components/Counter'
import { PILLARS, SERVICES, TESTIMONIALS, SITE, IMAGES, CLIENTS } from '../config/site'

export default function Home() {
  const { scrollY } = useScroll()
  const yArch = useTransform(scrollY, [0, 700], [0, -70])
  const yText = useTransform(scrollY, [0, 700], [0, 60])
  const [t, setT] = useState(0)
  useEffect(() => { const id = setInterval(() => setT(x => (x + 1) % TESTIMONIALS.length), 7000); return () => clearInterval(id) }, [])
  const cur = TESTIMONIALS[t]

  return (<>
    <SEO title="Defensa Legal Sólida y Comprometida en Lima" description="Estudio jurídico especialista en Derecho Penal y de Familia. Atención de emergencias 24/7 en Lima, Perú." />

    {/* HERO INMERSIVO: video simulado, asimétrico, borde inferior curvo */}
    <section className="relative isolate min-h-screen overflow-hidden pb-28 pt-40 text-white" style={{ clipPath: 'ellipse(135% 100% at 50% 0%)' }}>
      <VideoBackdrop />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-12">
        <motion.div style={{ y: yText }} className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-slate-200">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>Abogados de guardia · Lima, Perú</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }} className="mt-8 font-semibold leading-[0.9] !text-white">
            <span className="text-gold-grad block text-[19vw] sm:text-[9.5rem] lg:text-[11rem]">Defensa</span>
            <span className="mt-4 block max-w-xl font-serif text-3xl font-medium leading-tight md:text-5xl">legal sólida y comprometida en <em className="text-gold">Lima</em></span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }} className="mt-8 max-w-lg text-lg leading-relaxed text-slate-300">Expertos en Derecho Penal y Familia. Patrocinio implacable ante todas las instancias judiciales del país.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/contacto" className="btn-gold !rounded-full !px-8 !py-4 shadow-gold">Agendar consulta inmediata <ArrowRight size={16} /></Link>
            <a href={`tel:+${SITE.phoneRaw}`} className="btn-ghost !rounded-full !px-8 !py-4 backdrop-blur"><Phone size={16} /> {SITE.phone}</a></motion.div>
        </motion.div>

        {/* Arco + tarjetas de cristal flotantes */}
        <motion.div style={{ y: yArch }} className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3 }} className="relative">
            <div className="absolute -inset-3 rounded-t-[999px] rounded-b-[2rem] border border-gold/40" />
            <Placeholder src={IMAGES.about} label="Dr. Magallanes" className="aspect-[3/4] w-full rounded-t-[999px] rounded-b-[2rem]" />
            <div className="absolute inset-0 rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-t from-navy/70 via-transparent to-transparent" /></motion.div>
          <div className="glass-card animate-floaty absolute -left-4 top-1/4 rounded-2xl p-4 md:-left-12">
            <ShieldCheck className="text-gold" size={22} /><p className="mt-2 font-serif text-3xl text-white"><Counter to={98} suffix="%" /></p><p className="text-xs text-slate-300">resoluciones clave</p></div>
          <div className="glass-card absolute -right-3 bottom-16 rounded-2xl p-4 md:-right-8" style={{ animation: 'floaty 7s ease-in-out 1s infinite' }}>
            <Clock className="text-gold" size={22} /><p className="mt-2 font-serif text-3xl text-white">24/7</p><p className="text-xs text-slate-300">flagrancias y fiscalía</p></div>
        </motion.div>
      </div>
      <a href="#pilares" aria-label="Bajar" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gold/70"><ChevronDown /></a>
    </section>

    <Marquee words={['Libertad', 'Familia', 'Patrimonio', 'Honor']} />

    {/* PILARES: cristal esmerilado sobre imagen */}
    <section id="pilares" className="relative isolate overflow-hidden py-28">
      <Placeholder src={IMAGES.room} icon={false} className="absolute inset-0 -z-20 h-full w-full" /><div className="absolute inset-0 -z-10 bg-navy/85" />
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle light kicker="Metodología · excelencia · firmeza" title="Pilares de nuestra práctica legal" />
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (<Reveal key={p.title} delay={i * 0.12}>
            <article className="glass-card glow group h-full rounded-3xl p-8 transition duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-gold/60">
              <p.icon size={110} strokeWidth={0.6} className="absolute -right-4 -top-4 text-gold/10 transition duration-700 group-hover:rotate-12 group-hover:text-gold/20" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-gold"><p.icon size={24} strokeWidth={1.5} /></span>
              <h3 className="relative mt-6 text-2xl font-semibold !text-white">{p.title}</h3><p className="relative mt-3 text-sm leading-relaxed text-slate-300">{p.text}</p></article></Reveal>))}</div></div></section>

    {/* NOSOTROS: tipografía oversized */}
    <section className="relative overflow-hidden bg-white py-28"><div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
      <Reveal><div className="relative">
        <p className="font-serif text-[12rem] font-bold leading-[0.8] text-navy md:text-[18rem]"><span className="text-gold-grad"><Counter to={18} prefix="+" /></span></p>
        <p className="mt-2 font-serif text-3xl text-navy md:text-4xl">años defendiendo<br />la <em className="text-bronze">libertad</em> y el patrimonio.</p>
        <div className="bronze-line mt-8 w-40" /></div></Reveal>
      <Reveal delay={0.15}><p className="leading-relaxed text-slate-500">La defensa en causas de extrema dificultad exige una larga experiencia. M&M Abogados combina la solemnidad del litigio tradicional con la agilidad metodológica contemporánea, con presencia inmediata en sedes fiscales, comisarías y tribunales.</p>
        <Link to="/nosotros" className="btn-gold mt-8 !rounded-full !px-8">Conocer al equipo <ArrowRight size={16} /></Link></Reveal></div></section>

    {/* ÁREAS: bento asimétrico */}
    <section className="bg-gray-50 py-28"><div className="mx-auto max-w-6xl px-4">
      <SectionTitle kicker="Áreas de práctica" title="Nuestras áreas de excelencia" text="Práctica jurídica para personas y corporaciones que exigen resolutividad, discreción y rigor técnico." />
      <div className="grid auto-rows-[230px] gap-4 md:grid-cols-4">
        {SERVICES.map((s, i) => {
          const span = ['md:col-span-2 md:row-span-2', '', '', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2'][i]; const dark = i === 0
          return (<Reveal key={s.title} delay={(i % 3) * 0.08} className={span}>
            <Link to="/especialidades" className={`glow group flex h-full flex-col justify-between rounded-3xl border p-7 transition duration-500 hover:-translate-y-1 hover:shadow-lux ${dark ? 'border-gold/30 bg-gradient-to-br from-navy-700 to-navy text-white' : 'border-gray-200 bg-white'}`}>
              <s.icon size={dark ? 56 : 36} strokeWidth={1.2} className="text-gold transition duration-500 group-hover:scale-110" />
              <div><h3 className={`font-semibold ${dark ? 'text-4xl !text-white' : 'text-2xl'}`}>{s.title}</h3><p className={`mt-2 text-sm ${dark ? 'max-w-sm text-slate-300' : 'text-slate-500'}`}>{s.text}</p>
                {dark && <ul className="mt-4 space-y-1 text-sm text-slate-300">{s.items.map(it => <li key={it}>— {it}</li>)}</ul>}
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-bronze transition group-hover:gap-4 group-hover:text-gold">Consultar <ArrowRight size={14} /></span></div></Link></Reveal>)})}</div></div></section>

    {/* BANNER INTERMEDIO: urgencia */}
    <section className="relative isolate overflow-hidden py-24 text-white"><VideoBackdrop />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-5">
        <Reveal className="lg:col-span-3"><p className="font-serif italic text-gold">Detención · citación fiscal · medida cautelar</p>
          <h2 className="mt-3 text-5xl font-semibold leading-none !text-white md:text-7xl">Cada hora <span className="text-gold-grad">cuenta.</span></h2></Reveal>
        <Reveal delay={0.15} className="lg:col-span-2"><div className="glass-card rounded-3xl p-8">
          <p className="text-sm text-slate-300">Línea directa de emergencia</p><a href={`tel:+${SITE.phoneRaw}`} className="mt-1 block font-serif text-4xl text-gold-grad">{SITE.phone}</a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-gold mt-6 w-full !rounded-full"><MessageSquare size={16} /> Escribir por WhatsApp</a></div></Reveal></div></section>

    {/* TESTIMONIOS: carrusel */}
    <section className="bg-white py-28"><div className="mx-auto max-w-4xl px-4 text-center">
      <SectionTitle kicker="Confianza y resoluciones favorables" title="Casos de éxito y testimonios" />
      <Quote className="mx-auto text-gold/40" size={64} />
      <div className="min-h-[280px]"><AnimatePresence mode="wait"><motion.figure key={t} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
        <div className="mb-5 flex justify-center gap-1 text-gold" aria-label="5 estrellas">{[...Array(5)].map((_, k) => <Star key={k} size={18} fill="currentColor" />)}</div>
        <blockquote className="font-serif text-2xl italic leading-relaxed text-navy md:text-4xl">“{cur.text}”</blockquote>
        <figcaption className="mt-6 text-sm"><b className="text-navy">{cur.name}</b> <span className="text-bronze">· {cur.tag}</span></figcaption></motion.figure></AnimatePresence></div>
      <div className="flex justify-center gap-2">{TESTIMONIALS.map((x, i) => <button key={x.name} onClick={() => setT(i)} aria-label={`Testimonio ${i + 1}`} className={`h-1.5 rounded-full transition-all duration-500 ${i === t ? 'w-10 bg-gold' : 'w-4 bg-gray-300 hover:bg-bronze'}`} />)}</div>
      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gray-200 sm:grid-cols-3 lg:grid-cols-6">
        {CLIENTS.map(c => <div key={c} className="flex h-20 items-center justify-center bg-white px-2 font-serif text-sm text-slate-400 transition hover:bg-navy hover:text-gold">{c}</div>)}</div>
    </div></section>

    {/* CTA FINAL oversized */}
    <section className="relative isolate overflow-hidden bg-navy py-32 text-center"><div className="bronze-line absolute inset-x-0 top-0" />
      <span className="text-outline pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none font-serif text-[26vw] font-bold uppercase leading-none opacity-25" aria-hidden="true">M&M</span>
      <Reveal className="relative mx-auto max-w-3xl px-4"><h2 className="text-5xl !text-white md:text-7xl">Su defensa <span className="text-gold-grad">empieza hoy.</span></h2>
        <p className="mt-6 text-slate-300">No deje su libertad, familia ni patrimonio al azar.</p>
        <Link to="/contacto" className="btn-gold mt-10 !rounded-full !px-10 !py-4 shadow-gold">Solicitar evaluación de caso <ArrowRight size={16} /></Link></Reveal></section>
  </>)
}

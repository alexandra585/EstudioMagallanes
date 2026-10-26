import { useState } from 'react'
import { MapPin, Clock, Navigation, Phone, Mail, ExternalLink, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import Placeholder from '../components/Placeholder'
import { CASE_TYPES, SITE, IMAGES } from '../config/site'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [f, setF] = useState({ name: '', phone: '', type: '', msg: '', ok: false })
  const set = k => e => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
  const submit = e => { e.preventDefault(); /* TODO: enviar a tu backend / EmailJS / Formspree */ setSent(true) }
  const L = 'mb-1.5 mt-5 block text-sm font-medium text-navy'
  return (<>
    <SEO title="Contacto y Sedes" description="Contacte al estudio jurídico M&M en Independencia y Cercado de Lima. Atención confidencial y urgencias penales 24 horas." />
    <PageHero ghost="Contacto" title={<>Atención directa y <em className="text-gold">confidencial</em></>} text="Absoluta reserva, rigor técnico y presencia inmediata en nuestras sedes de Lima Metropolitana y tribunales." />

    {/* Mapa ancho */}
    <section className="bg-white"><Placeholder src={IMAGES.contactMap} label="Mapa de sedes" className="h-[340px] w-full md:h-[420px]" />
      <div className="relative z-10 mx-auto -mt-20 grid max-w-6xl gap-5 px-4 md:grid-cols-3">
        {[[Phone, 'Celular / urgencias 24/7', SITE.phone, `tel:+${SITE.phoneRaw}`], [Mail, 'Correo institucional', SITE.email, `mailto:${SITE.email}`], [Clock, 'Horario de oficina', 'L–V 8:30 am – 7:00 pm', null]].map(([I, t, v, h], i) => (
          <Reveal key={t} delay={i * 0.1}><a href={h || undefined} className="block h-full rounded-sm border-t-2 border-gold bg-white p-6 text-center shadow-lux transition hover:-translate-y-1">
            <I className="mx-auto text-gold" size={26} strokeWidth={1.5} /><p className="mt-3 text-xs text-slate-400">{t}</p><b className="mt-1 block truncate font-serif text-lg text-navy">{v}</b></a></Reveal>))}</div></section>

    <section className="bg-white py-20"><div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
      <Reveal className="lg:col-span-3"><div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lux md:p-10">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-bronze"><ShieldCheck size={16} />Protocolo de privacidad estricto</span>
        <h2 className="mt-3 text-3xl font-semibold">Envíenos los detalles de su caso</h2>
        <p className="mt-2 text-sm text-slate-500">Toda consulta queda protegida bajo el secreto profesional y absoluta confidencialidad procesal.</p>
        {sent ? (<div className="py-14 text-center"><CheckCircle2 className="mx-auto text-gold" size={52} /><h3 className="mt-4 text-2xl">Consulta recibida</h3><p className="mt-2 text-sm text-slate-500">Un abogado del estudio se comunicará con usted a la brevedad.</p></div>) : (
        <form onSubmit={submit}>
          <label className={L} htmlFor="n">Nombres y apellidos completos *</label><input id="n" required className="input" placeholder="Ej. Roberto Mendoza Ramos" value={f.name} onChange={set('name')} />
          <div className="grid gap-x-4 sm:grid-cols-2"><div><label className={L} htmlFor="t">Teléfono / WhatsApp *</label><input id="t" required type="tel" className="input" placeholder="+51 900 000 000" value={f.phone} onChange={set('phone')} /></div>
            <div><label className={L} htmlFor="c">Tipo de caso *</label><select id="c" required className="input" value={f.type} onChange={set('type')}><option value="">Seleccione la especialidad</option>{CASE_TYPES.map(c => <option key={c}>{c}</option>)}</select></div></div>
          <label className={L} htmlFor="m">Descripción breve de su situación *</label><textarea id="m" required rows={4} className="input resize-none" placeholder="Fechas clave, citaciones, juzgado o estado actual del procedimiento…" value={f.msg} onChange={set('msg')} />
          <label className="mt-5 flex gap-2 text-xs text-slate-500"><input type="checkbox" required checked={f.ok} onChange={set('ok')} className="mt-0.5 accent-[#D4AF37]" />Autorizo la evaluación reservada de mis datos exclusivamente para efectos de consulta legal confidencial.</label>
          <button className="btn-gold mt-6 w-full !rounded-sm shadow-gold">Solicitar evaluación de caso <ArrowRight size={16} /></button>
        </form>)}
        <div className="mt-6 flex flex-col justify-between gap-3 rounded-sm bg-navy p-4 text-white sm:flex-row sm:items-center">
          <div><p className="text-sm font-semibold text-gold">Urgencias penales y flagrancias</p><p className="text-xs text-slate-300">Atención inmediata en comisarías y fiscalía</p></div>
          <a href={`tel:+${SITE.phoneRaw}`} className="btn-gold !rounded-sm !px-4 !py-2 text-xs"><Phone size={14} /> Llamar 24 horas</a></div>
      </div></Reveal>

      <div className="space-y-6 lg:col-span-2">
        {SITE.offices.map((o, i) => (<Reveal key={o.id} delay={i * 0.1}><article className="glow rounded-3xl bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lux">
          <p className="text-xs text-bronze">{o.tag}</p><h3 className="mt-1 text-xl font-semibold">{o.name}</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-600"><li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" />{o.address}</li>
            <li className="flex gap-2 text-xs text-slate-500"><Navigation size={14} className="shrink-0" />{o.ref}</li><li className="flex gap-2 text-xs text-slate-500"><Clock size={14} className="shrink-0" />{o.hours}</li></ul>
          <a href={o.map} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 border-b border-gold pb-0.5 text-sm font-semibold text-navy">Ver en Google Maps <ExternalLink size={14} /></a></article></Reveal>))}</div>
    </div></section>
  </>)
}

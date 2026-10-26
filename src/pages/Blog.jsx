import { useState, useMemo } from 'react'
import { ArrowRight, Calendar, Search } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import Placeholder from '../components/Placeholder'
import { CATEGORIES, INITIAL_POSTS } from '../config/site'

const fmt = d => new Date(d + 'T00:00:00').toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' })

export default function Blog() {
  const [cat, setCat] = useState('Todas'); const [q, setQ] = useState('')
  // TODO: reemplazar INITIAL_POSTS por fetch a tu API/CMS (mismo estado que el panel /admin/blog)
  const published = INITIAL_POSTS.filter(p => p.status === 'Publicado')
  const posts = useMemo(() => published.filter(p => (cat === 'Todas' || p.category === cat) && (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase())), [cat, q])
  return (<>
    <SEO title="Blog – Actualidad Legal & Asesoría" description="Análisis jurídico, doctrina procesal y criterios judiciales del equipo de M&M Abogados en Lima, Perú." />
    <PageHero ghost="Blog" title={<>Actualidad legal <em className="text-gold">& asesoría</em></>} text="Información clave para proteger sus derechos y su patrimonio, con análisis riguroso del equipo de M&M Abogados." />
    <section className="bg-gray-50 py-20"><div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-3">
      <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
        {posts.map((p, i) => (<Reveal key={p.id} delay={(i % 2) * 0.1}><article className="glow group h-full overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lux">
          <div className="relative overflow-hidden"><Placeholder src={p.cover} label={p.title} className="aspect-[16/10] w-full transition duration-700 group-hover:scale-105" />
            <span className="absolute left-0 top-4 bg-gold px-3 py-1 text-xs font-semibold text-navy">{p.category}</span></div>
          <div className="p-6"><p className="flex items-center gap-1.5 text-xs text-slate-400"><Calendar size={12} />{fmt(p.date)}</p>
            <h2 className="mt-2 text-xl font-semibold leading-snug transition group-hover:text-bronze">{p.title}</h2>
            <p className="mt-3 text-sm text-slate-500">{p.excerpt}</p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition group-hover:gap-3">Leer artículo completo <ArrowRight size={14} /></a></div>
        </article></Reveal>))}
        {!posts.length && <p className="col-span-full py-16 text-center text-slate-500">No hay artículos que coincidan con su búsqueda.</p>}
      </div>
      <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-sm bg-white p-6 shadow-sm"><h3 className="mb-4 text-lg font-semibold">Buscar publicaciones</h3>
          <label className="relative block"><span className="sr-only">Buscar</span>
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Tema o norma…" className="input !pr-10" /><Search size={16} className="absolute right-3 top-3.5 text-bronze" /></label></div>
        <div className="rounded-sm bg-white p-6 shadow-sm"><h3 className="mb-4 text-lg font-semibold">Categorías</h3>
          <ul>{CATEGORIES.map(c => (<li key={c}><button onClick={() => setCat(c)} className={`flex w-full items-center justify-between border-b border-gray-100 py-3 text-sm transition hover:pl-1 hover:text-bronze ${cat === c ? 'font-semibold text-bronze' : 'text-slate-600'}`}>
            {c}<span className="text-xs text-slate-400">{c === 'Todas' ? published.length : published.filter(p => p.category === c).length}</span></button></li>))}</ul></div>
        <div className="rounded-sm bg-navy p-6 text-white"><h3 className="text-lg !text-white">¿Requiere un análisis para su caso?</h3>
          <p className="mt-2 text-sm text-slate-300">Evaluación reservada desde la primera sesión.</p><a href="/contacto" className="btn-gold mt-4 w-full !rounded-sm">Agendar consulta</a></div>
      </aside></div></section>
  </>)
}

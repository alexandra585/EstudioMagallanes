import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { LayoutDashboard, FileText, ExternalLink, Plus, Pencil, Trash2, ImagePlus, ArrowLeft, Lock } from 'lucide-react'
import { CATEGORIES, INITIAL_POSTS, SITE } from '../config/site'

const EMPTY = { title: '', category: 'Penal', cover: '', excerpt: '', content: '', status: 'Publicado' }

function Gate({ onOk }) {
  const [pw, setPw] = useState(''); const [err, setErr] = useState(false)
  const go = e => { e.preventDefault(); if (pw === SITE.adminPassword) { sessionStorage.setItem('mm_admin', '1'); onOk() } else setErr(true) }
  return (<div className="flex min-h-screen items-center justify-center bg-navy px-4">
    <form onSubmit={go} className="w-full max-w-sm rounded-lg bg-white p-8 shadow-2xl">
      <Lock className="text-gold" /><h1 className="mt-3 text-2xl font-semibold">Acceso administrativo</h1>
      <input type="password" className="input mt-5" placeholder="Contraseña" value={pw} onChange={e => { setPw(e.target.value); setErr(false) }} />
      {err && <p className="mt-2 text-xs text-red-600">Contraseña incorrecta.</p>}
      <button className="btn-gold mt-5 w-full">Ingresar</button></form></div>)
}

export default function BlogAdmin() {
  const [auth, setAuth] = useState(() => sessionStorage.getItem('mm_admin') === '1')
  const [posts, setPosts] = useState(INITIAL_POSTS)
  const [edit, setEdit] = useState(null) // null = lista, objeto = formulario
  if (!auth) return <Gate onOk={() => setAuth(true)} />

  const save = e => { e.preventDefault()
    setPosts(edit.id ? posts.map(p => p.id === edit.id ? edit : p) : [{ ...edit, id: Date.now(), date: new Date().toISOString().slice(0, 10) }, ...posts])
    setEdit(null) }
  const del = id => window.confirm('¿Eliminar este artículo?') && setPosts(posts.filter(p => p.id !== id))
  const up = k => e => setEdit({ ...edit, [k]: e.target.value })
  const onFile = e => { const f = e.target.files?.[0] || e.dataTransfer?.files?.[0]; if (f) setEdit(x => ({ ...x, cover: URL.createObjectURL(f) })) }

  return (<div className="flex min-h-screen bg-gray-50">
    <Helmet><title>Admin Blog | M&M Abogados</title><meta name="robots" content="noindex,nofollow" /></Helmet>
    <aside className="hidden w-60 shrink-0 flex-col bg-navy p-5 text-slate-300 md:flex">
      <p className="font-serif text-xl font-bold text-gold">M&M Admin</p>
      <nav className="mt-8 space-y-1 text-sm">
        <button onClick={() => setEdit(null)} className="flex w-full items-center gap-2 rounded bg-white/10 px-3 py-2 text-white"><FileText size={16} />Artículos</button>
        {['Dashboard', 'Casos y clientes', 'Mensajes de contacto', 'Testimonios', 'Equipo legal'].map(t => <span key={t} className="flex items-center gap-2 px-3 py-2 opacity-50"><LayoutDashboard size={16} />{t} <em className="text-[10px]">próx.</em></span>)}</nav>
      <Link to="/" className="mt-auto flex items-center gap-2 text-sm hover:text-gold"><ExternalLink size={14} />Ver sitio público</Link>
    </aside>

    <main className="flex-1 p-4 md:p-10">
      {!edit ? (<>
        <div className="mb-6 flex items-center justify-between"><h1 className="text-3xl font-semibold">Gestión del Blog</h1>
          <button onClick={() => setEdit({ ...EMPTY })} className="btn-gold"><Plus size={16} />Crear nuevo artículo</button></div>
        <div className="mb-6 grid gap-4 sm:grid-cols-3">{[['Artículos', posts.length], ['Publicados', posts.filter(p => p.status === 'Publicado').length], ['Borradores', posts.filter(p => p.status !== 'Publicado').length]].map(([t, v]) => <div key={t} className="rounded-sm border-l-4 border-gold bg-white p-5 shadow-sm"><p className="text-xs text-slate-500">{t}</p><p className="font-serif text-3xl text-navy">{v}</p></div>)}</div>
        <div className="overflow-x-auto rounded-sm bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-gray-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="p-4">Título</th><th className="p-4">Categoría</th><th className="p-4">Fecha</th><th className="p-4">Estado</th><th className="p-4 text-right">Acciones</th></tr></thead>
            <tbody>{posts.map(p => (<tr key={p.id} className="border-b last:border-0 hover:bg-gray-50">
              <td className="max-w-xs p-4 font-medium text-navy">{p.title}</td><td className="p-4">{p.category}</td><td className="p-4 whitespace-nowrap">{p.date}</td>
              <td className="p-4"><span className={`rounded-full px-2 py-1 text-xs font-semibold ${p.status === 'Publicado' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-slate-600'}`}>{p.status}</span></td>
              <td className="p-4 text-right whitespace-nowrap"><button onClick={() => setEdit(p)} className="mr-2 rounded p-2 text-navy hover:bg-gold/20" aria-label="Editar"><Pencil size={16} /></button>
                <button onClick={() => del(p.id)} className="rounded p-2 text-red-600 hover:bg-red-50" aria-label="Eliminar"><Trash2 size={16} /></button></td></tr>))}</tbody></table>
          {!posts.length && <p className="p-8 text-center text-slate-500">Sin artículos.</p>}</div>
      </>) : (
      <form onSubmit={save} className="mx-auto max-w-3xl space-y-5 rounded-lg bg-white p-6 shadow-sm md:p-8">
        <button type="button" onClick={() => setEdit(null)} className="flex items-center gap-1 text-sm text-slate-500 hover:text-navy"><ArrowLeft size={14} />Volver</button>
        <h1 className="text-2xl font-semibold">{edit.id ? 'Editar artículo' : 'Nuevo artículo'}</h1>
        <div><label className="mb-1 block text-xs font-semibold uppercase">Título</label><input required className="input" value={edit.title} onChange={up('title')} /></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><label className="mb-1 block text-xs font-semibold uppercase">Categoría</label><select className="input" value={edit.category} onChange={up('category')}>{CATEGORIES.slice(1).map(c => <option key={c}>{c}</option>)}</select></div>
          <div><label className="mb-1 block text-xs font-semibold uppercase">Estado</label><select className="input" value={edit.status} onChange={up('status')}><option>Publicado</option><option>Borrador</option></select></div></div>
        <div><label className="mb-1 block text-xs font-semibold uppercase">Imagen de portada</label>
          <label onDragOver={e => e.preventDefault()} onDrop={e => { e.preventDefault(); onFile(e) }} className="flex h-36 cursor-pointer flex-col items-center justify-center gap-2 rounded border-2 border-dashed border-gray-300 text-sm text-slate-500 transition hover:border-gold" style={edit.cover ? { backgroundImage: `url(${edit.cover})`, backgroundSize: 'cover' } : {}}>
            {!edit.cover && <><ImagePlus />Arrastre una imagen o haga clic</>}<input type="file" accept="image/*" hidden onChange={onFile} /></label>
          <input className="input mt-2" placeholder="…o pegue una URL de imagen" value={edit.cover.startsWith('blob:') ? '' : edit.cover} onChange={up('cover')} /></div>
        <div><label className="mb-1 block text-xs font-semibold uppercase">Resumen</label><textarea rows={2} className="input resize-none" value={edit.excerpt} onChange={up('excerpt')} /></div>
        <div><label className="mb-1 block text-xs font-semibold uppercase">Contenido</label><textarea rows={12} className="input font-mono" placeholder="Editor de texto enriquecido (integrar TipTap / Quill aquí)…" value={edit.content} onChange={up('content')} /></div>
        <div className="flex justify-end gap-3"><button type="button" onClick={() => setEdit(null)} className="rounded px-5 py-3 text-sm text-slate-600 hover:bg-gray-100">Cancelar</button><button className="btn-gold">Publicar</button></div>
      </form>)}
    </main>
  </div>)
}

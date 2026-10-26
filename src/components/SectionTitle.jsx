export default function SectionTitle({ kicker, title, text, center = true, light = false }) {
  return (<div className={`mb-14 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
    {kicker && <p className="mb-3 font-serif text-sm italic text-bronze">{kicker}</p>}
    <h2 className={`text-3xl font-semibold md:text-5xl ${light ? '!text-white' : ''}`}>{title}</h2>
    <div className={`mt-5 flex items-center gap-2 ${center ? 'justify-center' : ''}`}><span className="h-px w-12 bg-gold" /><span className="h-1.5 w-1.5 rotate-45 bg-gold" /><span className="h-px w-12 bg-gold" /></div>
    {text && <p className={`mt-5 leading-relaxed ${light ? 'text-slate-300' : 'text-slate-500'}`}>{text}</p>}
  </div>)
}

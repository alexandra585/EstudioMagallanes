import { motion } from 'framer-motion'
import VideoBackdrop from './VideoBackdrop'
import { IMAGES } from '../config/site'
export default function PageHero({ title, text, ghost = '', image = IMAGES.hero, children }) {
  return (<section className="relative isolate overflow-hidden pb-32 pt-44 text-white" style={{ clipPath: 'ellipse(130% 100% at 50% 0%)' }}>
    <VideoBackdrop image={image} />
    {ghost && <span className="text-outline pointer-events-none absolute -bottom-6 right-0 -z-0 select-none font-serif text-[22vw] font-bold uppercase leading-none opacity-40" aria-hidden="true">{ghost}</span>}
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="max-w-3xl">
        <div className="bronze-line mb-8 w-24" />
        <h1 className="text-5xl font-semibold leading-[1.05] !text-white md:text-7xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{text}</p>}
        {children}</motion.div></div></section>)
}

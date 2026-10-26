import { motion } from 'framer-motion'
export default function Marquee({ words = [], speed = 40 }) {
  const row = [...words, ...words]
  return (<div className="relative overflow-hidden bg-[#08121d] py-8" aria-hidden="true">
    <div className="bronze-line absolute inset-x-0 top-0" /><div className="bronze-line absolute inset-x-0 bottom-0" />
    <motion.div className="flex w-max gap-12 whitespace-nowrap" animate={{ x: ['0%', '-50%'] }} transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}>
      {row.map((w, i) => (<span key={i} className="flex items-center gap-12 font-serif text-6xl font-semibold uppercase md:text-8xl"><span className={i % 2 ? 'text-gold-grad' : 'text-outline'}>{w}</span><span className="text-gold/60">✦</span></span>))}</motion.div></div>)
}

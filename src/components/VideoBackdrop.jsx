import { motion } from 'framer-motion'
import Placeholder from './Placeholder'
import { IMAGES } from '../config/site'
// Simula un video de fondo: Ken Burns + auroras + haz de luz + grano. Si IMAGES.heroVideo tiene URL, usa video real.
export default function VideoBackdrop({ image = IMAGES.hero, video = IMAGES.heroVideo }) {
  return (<div className="absolute inset-0 -z-10 overflow-hidden bg-navy" aria-hidden="true">
    <motion.div className="absolute inset-[-6%]" animate={{ scale: [1.04, 1.16, 1.04], x: ['0%', '-2.5%', '0%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}>
      {video ? <video src={video} autoPlay muted loop playsInline className="h-full w-full object-cover" /> : <Placeholder src={image} icon={false} className="h-full w-full" />}</motion.div>
    <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-[#0a2442]/75" />
    <motion.div className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-[110px]" animate={{ x: [0, 120, 0], y: [0, 60, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
    <motion.div className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-sky-500/15 blur-[120px]" animate={{ x: [0, -100, 0], y: [0, -80, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} />
    <motion.div className="absolute -top-1/4 h-[150%] w-48 rotate-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" animate={{ left: ['-20%', '120%'] }} transition={{ duration: 9, repeat: Infinity, ease: 'linear', repeatDelay: 4 }} />
    <div className="grain absolute inset-0" /><div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />
  </div>)
}

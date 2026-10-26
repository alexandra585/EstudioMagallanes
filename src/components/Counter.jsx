import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
export default function Counter({ to = 0, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null); const inView = useInView(ref, { once: true }); const [v, setV] = useState(0)
  useEffect(() => { if (inView) { const c = animate(0, to, { duration, ease: 'easeOut', onUpdate: x => setV(Math.round(x)) }); return () => c.stop() } }, [inView, to, duration])
  return <span ref={ref}>{prefix}{v}{suffix}</span>
}

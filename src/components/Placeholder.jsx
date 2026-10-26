import { Scale } from 'lucide-react'
// Muestra la imagen si hay URL; si no, un placeholder editorial navy/dorado.
export default function Placeholder({ src, label = '', className = '', icon = true }) {
  if (src) return <img src={src} alt={label} className={`object-cover ${className}`} />
  return (<div role="img" aria-label={label || 'Imagen referencial'} className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-700 via-navy to-black ${className}`}>
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 22px, rgba(212,175,55,.25) 22px 23px)' }} />
    {icon && <Scale className="relative text-gold/40" size={48} strokeWidth={1} />}
  </div>)
}

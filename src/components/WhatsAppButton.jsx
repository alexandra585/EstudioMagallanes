import { MessageCircle } from 'lucide-react'
import { SITE } from '../config/site'
export default function WhatsAppButton() {
  return (<a href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp"
    className="fixed bottom-4 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg animate-pulse-ring transition hover:scale-110">
    <MessageCircle size={28} /></a>)
}

import { MessageCircle } from 'lucide-react';
import { getGeneralEnquiryUrl } from '../../services/whatsapp.service';

export function WhatsAppFloat() {
  return (
    <a
      href={getGeneralEnquiryUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp for Coorg trip enquiries"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1F4D36] hover:bg-[#D95D24] text-white shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D95D24]"
    >
      <MessageCircle className="w-5 h-5" aria-hidden="true" />
      <span className="hidden sm:inline text-xs font-semibold tracking-wide whitespace-nowrap">
        WhatsApp Us
      </span>
    </a>
  );
}

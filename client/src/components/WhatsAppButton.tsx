import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '5516997934558';
  const message = 'Olá! Gostaria de agendar minha análise com bioressonância BioSync.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#2DD4BF]/50 transition-all duration-300 transform hover:scale-110 animate-pulse-glow"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}

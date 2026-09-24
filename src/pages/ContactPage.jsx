import { MessageCircle, Mail } from 'lucide-react';
import { APP_PHONE_NUMBER, APP_EMAIL } from '../data/products';

export default function ContactPage() {
  const handleWhatsApp = () => {
    const text = 'Olá! Vim pelo site da GW Eletrônicos e gostaria de tirar uma dúvida.';
    window.open(`https://wa.me/${APP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-slate-900">Fale Conosco</h1>
      <p className="text-slate-500 mt-2">Escolha o melhor canal para ser atendido rapidamente.</p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <button 
          onClick={handleWhatsApp}
          className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 group cursor-pointer"
        >
          <MessageCircle className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-bold text-slate-900">Atendimento WhatsApp</h3>
          <p className="text-sm text-slate-600">Resposta rápida e atendimento humanizado.</p>
        </button>

        <a 
          href={`mailto:${APP_EMAIL}`}
          className="p-8 bg-blue-50 rounded-2xl border border-blue-200 hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 group"
        >
          <Mail className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-bold text-slate-900">Enviar E-mail</h3>
          <p className="text-sm text-slate-600">{APP_EMAIL}</p>
        </a>
      </div>
    </div>
  );
} 
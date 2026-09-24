
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { APP_PHONE_NUMBER } from '../data/products';

export default function Hero() {
  const handleWhatsApp = () => {
    const text = 'Olá! Gostaria de falar com um atendente da GW Eletrônicos.';
    window.open(`https://wa.me/${APP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };
 
  return (
    <section className="bg-gradient-to-b from-blue-50/50 to-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-4">
          <Star className="w-3.5 h-3.5 fill-blue-600" /> Atendimento Personalizado
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Os melhores smartphones e acessórios em um só lugar.
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
          Qualidade garantida, atendimento rápido via WhatsApp e envio seguro.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/celulares" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm transition-all text-center"
          >
            Ver Celulares
          </Link>
          <button 
            onClick={handleWhatsApp}
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-6 py-3.5 rounded-xl transition-all cursor-pointer"
          >
            Falar com Atendente
          </button>
        </div>
      </div>
    </section>
  );
}
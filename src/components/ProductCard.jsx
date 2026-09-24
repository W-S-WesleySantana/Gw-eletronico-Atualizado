
import { MessageCircle } from 'lucide-react';
import { APP_PHONE_NUMBER } from '../data/products';

export default function ProductCard({ product }) {
  const handleWhatsApp = () => {
    const text = `Olá! Tenho interesse no ${product.title} na GW Eletrônicos.`;
    window.open(`https://wa.me/${APP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };
  
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group">
      <div>
        <div className="relative aspect-square bg-slate-50 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.tag && (
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-xs font-bold text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200">
              {product.tag}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-slate-500 mt-1">{product.subtitle}</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-4">{product.price}</p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <button
          onClick={handleWhatsApp}
          className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          Comprar pelo WhatsApp
        </button>
      </div>
    </div>
  );
}
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { Smartphone, MessageCircle, ShieldCheck } from 'lucide-react';

export default function HomePage({ products }) {
  return (
    <>
      <Hero />
      
      <section className="py-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start p-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Aparelhos Homologados</h4>
              <p className="text-sm text-slate-500">100% Originais com garantia</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start p-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Compra via WhatsApp</h4>
              <p className="text-sm text-slate-500">Negociação rápida e sem burocracia</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start p-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Garantia & Suporte</h4>
              <p className="text-sm text-slate-500">Suporte pós-venda completo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Todos os Destaques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  ); 
}
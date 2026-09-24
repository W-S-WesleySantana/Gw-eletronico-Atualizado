import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MessageCircle, Mail, Menu, X, Lock } from 'lucide-react';
import { APP_PHONE_NUMBER, APP_EMAIL } from '../data/products';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    const text = 'Olá! Gostaria de tirar umas dúvidas sobre os produtos da GW Eletrônicos.';
    window.open(`https://wa.me/${APP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };
 
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
      : 'text-slate-600 hover:text-blue-600 transition-colors pb-1';

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white font-black text-xl px-3 py-1.5 rounded-xl tracking-wider shadow-sm">
              GW
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              Eletrônicos
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavLink to="/" className={navLinkClass}>Início</NavLink>
            <NavLink to="/celulares" className={navLinkClass}>Celulares</NavLink>
            <NavLink to="/fones" className={navLinkClass}>Fones</NavLink>
            <NavLink to="/acessorios" className={navLinkClass}>Acessórios</NavLink>
            <NavLink to="/contato" className={navLinkClass}>Contato</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link 
              to="/admin" 
              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-all"
              title="Painel do Dono"
            >
              <Lock className="w-4 h-4" />
            </Link>

            <a 
              href={`mailto:${APP_EMAIL}`}
              className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-all"
              title="Enviar E-mail"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button 
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3">
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Início</NavLink>
          <NavLink to="/celulares" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Celulares</NavLink>
          <NavLink to="/fones" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Fones</NavLink>
          <NavLink to="/acessorios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Acessórios</NavLink>
          <NavLink to="/contato" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Contato</NavLink>
          <NavLink to="/admin" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-blue-600 font-medium">Painel Admin (Dono)</NavLink>
          
          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={() => { handleWhatsApp(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white py-2.5 rounded-xl font-semibold cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              Atendimento WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
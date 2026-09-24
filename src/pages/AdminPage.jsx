import { useState } from 'react';
import { PlusCircle, Trash2, Lock, LogOut, CheckCircle, PackagePlus, Eye } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ADMIN_PASSWORD = "gw1234";

export default function AdminPage({ products, setProducts }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('gw_admin_logged') === 'true'
  );
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('celulares');
  const [tag, setTag] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('gw_admin_logged', 'true');
      setLoginError('');
    } else {
      setLoginError('Senha incorreta! Tente novamente.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('gw_admin_logged');
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!title || !price) {
      alert('Preencha ao menos o nome e o preço do produto!');
      return;
    }

    const newProduct = {
      id: Date.now(),
      title,
      subtitle: subtitle || 'Sem descrição adicional',
      price: price.startsWith('R$') ? price : `R$ ${price}`,
      category,
      tag: tag || 'Novo',
      image: imageUrl || 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400'
    };

    setProducts([newProduct, ...products]);

    setTitle('');
    setSubtitle('');
    setPrice('');
    setTag('');
    setImageUrl('');

    setSuccessMessage('Produto cadastrado com sucesso!');
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este produto do site?')) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
    }
  };

  const previewProduct = {
    id: 'preview',
    title: title || 'Nome do Produto',
    subtitle: subtitle || 'Descrição detalhada do produto',
    price: price ? (price.startsWith('R$') ? price : `R$ ${price}`) : 'R$ 0,00',
    category,
    tag: tag || 'Prévia',
    image: imageUrl || 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400'
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 text-center">Área Restrita do Dono</h2>
          <p className="text-slate-500 text-sm text-center mt-1 mb-6">
            Digite sua senha para gerenciar a vitrine de produtos.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Senha de Acesso
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Sua senha secreta"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
              />
            </div>

            {loginError && (
              <p className="text-xs text-red-500 font-semibold text-center">{loginError}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              Entrar no Painel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-2">
            Modo Administrador Ativo
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900">Gerenciador de Produtos</h1>
          <p className="text-slate-500 text-sm">Adicione novos itens ou remova produtos cadastrados na GW Eletrônicos.</p>
        </div>

        <button
          onClick={handleLogout}
          className="self-start md:self-auto flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium text-sm transition-all cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          Sair do Painel
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <PackagePlus className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">Cadastrar Novo Produto</h2>
          </div>

          {successMessage && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3 text-sm font-medium">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              {successMessage}
            </div>
          )}

          <form onSubmit={handleAddProduct} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nome do Produto *
                </label>
                <input
                  type="text"
                  placeholder="Ex: iPhone 15 Pro Max"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preço (R$) *
                </label>
                <input
                  type="text"
                  placeholder="Ex: 7.899 ou R$ 7.899"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Categoria
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm bg-white"
                >
                  <option value="celulares">Celulares</option>
                  <option value="fones">Fones</option>
                  <option value="acessorios">Acessórios</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Selo / Destaque (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Lançamento, Promoção, 256GB"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Descrição Curta
              </label>
              <input
                type="text"
                placeholder="Ex: 256GB - Titânio Natural, Garantia de 1 ano"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                URL da Imagem (Link da foto)
              </label>
              <input
                type="url"
                placeholder="https://exemplo.com/foto-do-produto.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-4 cursor-pointer"
            >
              <PlusCircle className="w-5 h-5" />
              Publicar Produto no Site
            </button>
          </form>
        </div>

        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 text-slate-700 font-bold text-sm">
              <Eye className="w-4 h-4 text-blue-600" />
              Prévia Visual do Card
            </div>
            <ProductCard product={previewProduct} />
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">
            É assim que seu cliente verá o card na vitrine.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Produtos Ativos no Site ({products.length})</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <ProductCard product={product} />
              
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-xl shadow-lg transition-all cursor-pointer"
                title="Remover produto do site"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
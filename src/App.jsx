import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import PhonesPage from './pages/PhonesPage';
import HeadphonesPage from './pages/HeadphonesPage';
import AccessoriesPage from './pages/AccessoriesPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

import { getStoredProducts, saveStoredProducts } from './data/products';

export default function App() {
  const [products, setProducts] = useState(getStoredProducts);

  useEffect(() => {
    saveStoredProducts(products);
  }, [products]);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col text-slate-800 bg-slate-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage products={products} />} />
            <Route path="/celulares" element={<PhonesPage products={products} />} />
            <Route path="/fones" element={<HeadphonesPage products={products} />} />
            <Route path="/acessorios" element={<AccessoriesPage products={products} />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage products={products} setProducts={setProducts} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
} 
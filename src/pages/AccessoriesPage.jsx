import CategoryPage from './CategoryPage';

export default function AccessoriesPage({ products }) {
  return (
    <CategoryPage 
      products={products}
      category="acessorios" 
      title="Acessórios para Celulares" 
      description="Carregadores, cabos, capinhas e outros acessórios para manter você sempre conectado." 
    />
  );
} 
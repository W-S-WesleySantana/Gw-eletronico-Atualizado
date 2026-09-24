import CategoryPage from './CategoryPage';

export default function HeadphonesPage({ products }) {
  return (
    <CategoryPage 
      products={products}
      category="fones" 
      title="Fones de Ouvido & Headphones" 
      description="Som de alta qualidade, cancelamento de ruído e ergonomia para o seu dia a dia." 
    />
  );
} 
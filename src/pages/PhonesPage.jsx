import CategoryPage from './CategoryPage';

export default function PhonesPage({ products }) {
  return (
    <CategoryPage 
      products={products}
      category="celulares" 
      title="Celulares e Smartphones" 
      description="Encontre os melhores smartphones das principais marcas com os melhores preços." 
    />
  );
} 
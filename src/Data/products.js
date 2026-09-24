export const APP_PHONE_NUMBER = "11958396087";
export const APP_EMAIL = "contato@gweletronicos.com.br";



export const initialProducts = [
  {
    id: 1,
    category: 'celulares',
    title: 'iPhone 15 Pro Max',
    subtitle: '256GB - Titânio Natural',
    price: "R$ 7.899",
    tag: 'Mais Vendido',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    category: 'celulares',
    title: 'Samsung Galaxy S24 Ultra',
    subtitle: '512GB - Cinza Titânio',
    price: 'R$ 6.999',
    tag: 'Lançamento',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    category: 'fones',
    title: 'AirPods Pro (2ª Geração)',
    subtitle: 'Cancelamento Ativo de Ruído',
    price: 'R$ 1.899',
    tag: 'Destaque',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    category: 'fones',
    title: 'Headphone Bluetooth Premium',
    subtitle: 'Som de Alta Fidelidade',
    price: 'R$ 499',
    tag: 'Oferta',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 5,
    category: 'acessorios',
    title: 'Carregador Anker 20W Fast',
    subtitle: 'Compatível com iOS e Android',
    price: 'R$ 129',
    tag: 'Essencial',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 6,
    category: 'acessorios',
    title: 'Cabo MFi Lightning / USB-C',
    subtitle: 'Nylon Trançado 1.5m',
    price: 'R$ 79',
    tag: 'Resistente',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=400'
  }
];

export const getStoredProducts = () => {
  const localData = localStorage.getItem('gw_products');
  if (localData) {
    try {
      return JSON.parse(localData);
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return initialProducts;
    }
  }
  return initialProducts;
};

export const saveStoredProducts = (products) => {
  localStorage.setItem('gw_products', JSON.stringify(products));
};
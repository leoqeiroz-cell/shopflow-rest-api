export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Notebook PrimeBook 14',
    category: 'eletronicos',
    price: 3499.9,
  },
  {
    id: 2,
    name: 'Fone Bluetooth PrimeSound',
    category: 'eletronicos',
    price: 249.9,
  },
  {
    id: 3,
    name: 'Camiseta PrimeShop',
    category: 'vestuario',
    price: 79.9,
  },
  {
    id: 4,
    name: 'Garrafa Termica',
    category: 'casa',
    price: 59.9,
  },
];

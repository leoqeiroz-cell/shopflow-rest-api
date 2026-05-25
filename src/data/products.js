export const products = [
  {
    id: 1,
    name: 'Notebook Aura 14',
    category: 'Computadores',
    status: 'Destaque',
    price: 4599,
    stock: 12,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
    description:
      'Notebook leve com tela de alta definicao, SSD rapido e bateria para um dia inteiro de produtividade.',
  },
  {
    id: 2,
    name: 'Headset Pulse Pro',
    category: 'Audio',
    status: 'Mais vendido',
    price: 649,
    stock: 34,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    description:
      'Headset sem fio com cancelamento de ruido, microfone destacavel e som equilibrado para jogos e reunioes.',
  },
  {
    id: 3,
    name: 'Teclado Studio Keys',
    category: 'Acessorios',
    status: 'Novo',
    price: 389,
    stock: 21,
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
    description:
      'Teclado mecanico compacto com iluminacao ajustavel, switches silenciosos e acabamento premium.',
  },
  {
    id: 4,
    name: 'Monitor Vision 27',
    category: 'Monitores',
    status: 'Estoque critico',
    price: 1899,
    stock: 8,
    image:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80',
    description:
      'Monitor QHD de 27 polegadas com cores precisas, bordas finas e taxa de atualizacao fluida.',
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

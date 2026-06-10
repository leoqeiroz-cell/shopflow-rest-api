import { Router, type Request, type Response } from 'express';
import { products } from '../data/products.js';

export const productsRouter = Router();

productsRouter.get('/', (req: Request, res: Response) => {
  const category = req.query.category?.toString().trim().toLowerCase();

  const filteredProducts = category
    ? products.filter((product) => product.category.toLowerCase() === category)
    : products;

  res.status(200).json({
    total: filteredProducts.length,
    category: category || null,
    products: filteredProducts,
  });
});

productsRouter.get('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      error: 'O id do produto deve ser um numero.',
    });
    return;
  }

  if (id < 0) {
    res.status(400).json({
      error: 'O id do produto nao pode ser negativo.',
    });
    return;
  }

  const product = products.find((item) => item.id === id);

  if (!product) {
    res.status(404).json({
      error: 'Produto nao encontrado.',
    });
    return;
  }

  res.status(200).json(product);
});

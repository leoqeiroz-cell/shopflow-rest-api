import express, { type Request, type Response } from 'express';
import { logger } from './middlewares/logger.js';
import { notFound } from './middlewares/notFound.js';
import { ordersRouter } from './routes/orders.js';
import { productsRouter } from './routes/products.js';

export const app = express();

app.use(express.json());
app.use(logger);

app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'API PrimeShop - Atividade 6',
    description: 'Roteamento REST com Express e TypeScript para produtos e pedidos.',
    endpoints: {
      products: ['GET /products', 'GET /products?category=eletronicos', 'GET /products/:id'],
      orders: ['POST /orders', 'PATCH /orders/:id', 'DELETE /orders/:id'],
    },
  });
});

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use(notFound);

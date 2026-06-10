import { Router, type Request, type Response } from 'express';
import { validateCreateOrder, validateUpdateStatus } from '../middlewares/validateOrder.js';
import { validateBody } from '../middlewares/validateBody.js';

type CreateOrderBody = {
  customerName: string;
  productIds: number[];
};

type UpdateOrderStatusBody = {
  status: string;
};

export const ordersRouter = Router();

ordersRouter.post(
  '/',
  validateBody,
  validateCreateOrder,
  (req: Request<unknown, unknown, CreateOrderBody>, res: Response) => {
    res.status(201).json(req.body);
  },
);

ordersRouter.patch(
  '/:id',
  validateBody,
  validateUpdateStatus,
  (req: Request<{ id: string }, unknown, UpdateOrderStatusBody>, res: Response) => {
    const id = Number(req.params.id);
    const { status } = req.body;

    if (Number.isNaN(id) || id <= 0) {
      res.status(400).json({
        error: 'O id do pedido deve ser um numero positivo.',
      });
      return;
    }

    res.status(200).json({
      id,
      status,
      message: 'Status do pedido atualizado com sucesso.',
    });
  },
);

ordersRouter.delete('/:id', (req: Request<{ id: string }>, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    res.status(400).json({
      error: 'O id do pedido deve ser um numero positivo.',
    });
    return;
  }

  res.status(204).send();
});

import type { NextFunction, Request, Response } from 'express';

const allowedStatuses = ['pendente', 'pago', 'enviado', 'cancelado'];

export function validateCreateOrder(req: Request, res: Response, next: NextFunction): void {
  const { customerName, productIds } = req.body as {
    customerName?: unknown;
    productIds?: unknown;
  };

  if (typeof customerName !== 'string' || customerName.trim().length === 0) {
    res.status(400).json({
      error: 'Informe o nome do cliente no campo customerName.',
    });
    return;
  }

  if (
    !Array.isArray(productIds) ||
    productIds.length === 0 ||
    !productIds.every((id) => Number.isInteger(id) && id > 0)
  ) {
    res.status(400).json({
      error: 'Informe productIds como uma lista de numeros inteiros positivos.',
    });
    return;
  }

  next();
}

export function validateUpdateStatus(req: Request, res: Response, next: NextFunction): void {
  const { status } = req.body as {
    status?: unknown;
  };

  if (typeof status !== 'string' || status.trim().length === 0) {
    res.status(400).json({
      error: 'Informe o novo status do pedido.',
    });
    return;
  }

  if (!allowedStatuses.includes(status)) {
    res.status(400).json({
      error: 'Status invalido.',
      allowedStatuses,
    });
    return;
  }

  next();
}

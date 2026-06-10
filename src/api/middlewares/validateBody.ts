import type { NextFunction, Request, Response } from 'express';

export function validateBody(req: Request, res: Response, next: NextFunction): void {
  const bodyIsEmpty =
    req.body === undefined ||
    req.body === null ||
    (typeof req.body === 'object' && Object.keys(req.body).length === 0);

  if (bodyIsEmpty) {
    res.status(400).json({
      error: 'O corpo da requisicao nao pode estar vazio.',
    });
    return;
  }

  next();
}

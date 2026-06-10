import type { NextFunction, Request, Response } from 'express';

export function logger(req: Request, _res: Response, next: NextFunction): void {
  const date = new Date().toISOString();

  console.log(`[${date}] ${req.method} ${req.originalUrl}`);

  next();
}

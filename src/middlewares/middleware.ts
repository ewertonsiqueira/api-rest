import { NextFunction, Request, Response } from "express";

export function myMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('Middleware executado!');
  return next();
}
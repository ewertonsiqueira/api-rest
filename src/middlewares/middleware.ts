import { NextFunction, Request, Response } from "express";

export function myMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('Middleware executado!');
  // Simulando a atribuição de um valor à propriedade userId do objeto req
  req.userId = 'Batata'; // Exemplo de valor, pode ser dinâmico dependendo da lógica do middleware

  return next();
}
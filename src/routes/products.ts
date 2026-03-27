import { Router } from 'express';
import { myMiddleware } from '../middlewares/middleware';

const productsRoutes = Router();

productsRoutes.get('/', (req, res) => {
  res.json({ message: 'Lista de produtos' });
});

productsRoutes.post('/', myMiddleware,(req, res) => {
  const { name, price, description } = req.body;
  res.status(201).json({ message: 'Produto criado com sucesso', product: { name, price, description } });
});

export default productsRoutes;
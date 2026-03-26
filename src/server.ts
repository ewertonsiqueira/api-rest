import express from 'express';
import { myMiddleware } from './middlewares/middleware';

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(myMiddleware);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/products', (req, res) => {
  console.log('Received product data:', req.body);
  const { name, price, description } = req.body;
  // res.send(`Product created: ${name} - $${price} - ${description}`);
  res.status(201).json({ message: 'Produto criado com sucesso', product: { name, price, description } });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
import express, { Request, Response } from 'express';

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Contoh route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express!');
});

// Menjalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

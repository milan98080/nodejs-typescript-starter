import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import internRoutes from './routes/internRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use(internRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

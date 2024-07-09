import express from 'express';
import cors from 'cors';
import { router } from './routes';
import morgan from 'morgan';
const PORT = process.env.PORT || 3001;
const app = express();
import './configs/mongo';

app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

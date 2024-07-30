import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes';
import sequelize from './config/db';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use('/api/books', bookRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Book Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

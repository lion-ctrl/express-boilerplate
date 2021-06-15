import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import exampleRoutes from './routes/example.routes';

dotenv.config();
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/api/v0/example', exampleRoutes);

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});

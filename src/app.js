import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import router from './routes/api.routes.js';
import SmartDAO from './dao/api.dao.js';

config();

const app = express();

app.set('views', 'C:/Users/irvon/Desktop/examen/src/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/api', router);

// Ruta principal para renderizar la vista
app.get('/', async (req, res) => {
    try {
        const products = await SmartDAO.getAll();
        console.log('Productos:', products);
        res.render('index', { products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

export default app;

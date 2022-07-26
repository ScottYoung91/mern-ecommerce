import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('api listening');
});

app.use('/api/products', productRoutes);

app.use((err, req, res, next) => {
	const error = res.statusCode === 200 ? 500 : res.statusCode;

	res.status(statusCode);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
});

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold
	)
);

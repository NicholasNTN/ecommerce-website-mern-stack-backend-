import express from 'express'
import data from './data.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';
import SliderRouter from './routes/sliderRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to DB !');
}).catch((err) => {
    console.log(err.message);
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/seed/', seedRouter);
app.use('/api/products/', productRoutes);
app.use('/api/category/', categoryRouter);
app.use('/api/sliderItems/', SliderRouter);
app.use('/api/users/', userRouter);
app.use('/api/orders/', orderRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

//for products
app.get('/api/products', (req, res) => {
    res.send(data.products)
});

//for slider
app.get('/api/slider', (req, res) => {
    res.send(data.sliderItems)
});

//for category
app.get('/api/category', (req, res) => {
    res.send(data.category)
});

//for product
// app.get("/api/products/slug/:slug", (req, res) => {
//     const product = data.products.find((x) => x.slug === req.params.slug);
//     if (product) {
//         res.send(product)
//     } else {
//         res.status(404).send({ message: 'Product not found !' })
//     }
// });

const port = process.env.PORT || 3010;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})
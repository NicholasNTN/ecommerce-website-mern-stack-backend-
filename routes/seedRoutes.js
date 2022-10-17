import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import Category from '../models/categoryModel.js';
import Slider from '../models/sliderModel.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {

    //for product
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);

    //for category
    await Category.remove({});
    const createCategory = await Category.insertMany(data.category);

    //for slider
    await Slider.remove({});
    const createSlider = await Slider.insertMany(data.sliderItems);

    //for user
    await User.remove({});
    const createUser = await User.insertMany(data.users);

    res.send({ createdProducts, createCategory, createSlider, createUser });
});

export default seedRouter;
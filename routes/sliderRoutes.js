import express from 'express'
import Slider from '../models/sliderModel.js';

const SliderRouter = express.Router();

SliderRouter.get('/', async (req, res) => {
    const sliderItems = await Slider.find();
    res.send(sliderItems);
});

export default SliderRouter;
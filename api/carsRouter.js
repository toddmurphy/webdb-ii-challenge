const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');
//need to install database config

//get cars --> get all cars
router.get('/', async (req, res) => {
  try {
    const cars = await db('cars').select();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no cars returned from the server', error });
  }
});

//post car -> create a new car
router.post('/', async (req, res) => {
  try {
    const newPost = {
      make: req.body.make,
      model: req.body.model,
      VIN: req.body.model,
      mileage: req.body.mileage,
      transmission: req.body.transmission,
      status: req.body.status
    };

    const [id] = await db('cars').insert(newPost);
    res.json(
      await db('cars')
        .where('id', id)
        .first()
    );
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no car created on the server', error });
  }
});

module.exports = router;

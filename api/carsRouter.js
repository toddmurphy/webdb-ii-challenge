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

    const [id] = await db('cars').insert(newPost, 'id');

    res.json(
      await db('cars')
        .where('id', id)
        .first()
    );
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no car created on the server', error });
  }
});

//delete --> remove a car
router.delete('/:id', async (req, res) => {
  try {
    await db('cars')
      .where('id', req.params.id)
      .del();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no car deleted from the server', error });
  }
});

//put --> update a car
router.put('/:id', async (req, res) => {
  try {
    const updateCar = {
      make: req.body.make,
      model: req.body.model,
      VIN: req.body.model,
      mileage: req.body.mileage,
      transmission: req.body.transmission,
      status: req.body.status
    };
    //updates a car info
    await db('cars')
      .where('id', req.params.id)
      .update(updateCar);

    //response in postman
    res.json(
      await db('cars')
        .where('id', req.params.id)
        .first()
    );
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no car info updated on the server', error });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
//need to install database config

//get cars --> get all cars
router.get('/', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no cars returned from the server', error });
  }
});

//post car -> create a new car
router.post('/', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Sorry, no car created on the server', error });
  }
});

module.exports = router;

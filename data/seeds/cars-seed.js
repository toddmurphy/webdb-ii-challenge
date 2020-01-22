exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        { make: 'Ford', model: 'Escape', VIN: '98765QWERRT', mileage: 25000, transmission: 'V6', status: 'used' },
        { make: 'Audi', model: 'R8', VIN: '96354POIUY', mileage: 652587, transmission: 'V12', status: 'new' },
        { make: 'McLaren', model: 'Roadster', VIN: '74125LKJHG', mileage: 1287, transmission: 'V50', status: 'clean energy' }
      ]);
    });
};

exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    //add schema here
    tbl.increments();
    tbl.string('make', 255).index();
    tbl.string('model', 255).notNullable();
    tbl
      .string('VIN', 30)
      .unique()
      .notNullable();
    tbl.integer('mileage', 255);
    tbl.string('transmission', 255);
    tbl.string('status', 255);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};

// ******REQUIRED****** --> VIN (integer), make(string), model(string), and mileage(integer).
//*****OPTIONAL****** --> transmission type(string), status of title(string)
//

// They also track:
// transmission type
// and status of the title (clean, salvage, etc.),
//but this information is not always immediately known.

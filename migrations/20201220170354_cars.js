
exports.up = async function(knex) {
  await knex.schema.createTable("cars", table => {
    table.text("VIN").notNull().unique().primary()
    table.text('make').notNull()
    table.text('model').notNull()
    table.integer('mileage').notNull()
    table.text("transmission")
    table.text("titleStatus")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars')
};

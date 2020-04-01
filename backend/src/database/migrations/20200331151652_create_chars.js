
exports.up = function(knex) {
  return knex.schema.createTable('char',function(table) {
    table.string('id').primary();
    table.string('username').primary();
    table.string('senha').notNullable();
    table.string('name').notNullable(); 
    table.string('email').notNullable(); 
    table.string('classe').notNullable(); 
    table.decimal('whatsapp').notNullable(); 
  });
};

exports.down = function(knex) {
   return  knex.schema.dropTable('char');
  
};

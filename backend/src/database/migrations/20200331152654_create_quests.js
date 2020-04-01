
exports.up = function(knex) {
    return knex.schema.createTable('quest',function(table) {
      table.increments();
      table.string('titulo').notNullable(); 
      table.decimal('level').notNullable(); 
      table.string('local').notNullable(); 
      table.string('desc').notNullable(); 
      table.string('game').notNullable(); 
      table.string('char_id').notNullable();
      table.foreign('char_id').references('id').inTable('char');
    });
  };
  
  exports.down = function(knex) {
     return  knex.schema.dropTable('quest');
    
  };
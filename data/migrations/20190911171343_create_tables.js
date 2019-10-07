exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128)
                .unique()
                .notNullable();   
        })

        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 128)
                .unique()
                .notNullable();

        })

        .createTable('recipe_ingredients', tbl => {
            tbl.increments();
            tbl.float('quantity')
            tbl.string('measurement', 128)
            // Foreign key
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })

        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.string('step_number').notNullable();
            tbl.string('instruction', 400)
                .notNullable()
            // Foreign key
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};

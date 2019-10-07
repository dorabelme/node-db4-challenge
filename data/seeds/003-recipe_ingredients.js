
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 1, measurement: 'tablespoon' },
        { recipe_id: 1, ingredient_id: 2, quantity: 5, measurement: '2lb' },
        { recipe_id: 1, ingredient_id: 3, quantity: 1, measurement: 'teaspoon' },
        { recipe_id: 1, ingredient_id: 4, quantity: 1, measurement: 'teaspoon' },
        { recipe_id: 1, ingredient_id: 5, quantity: 2, measurement: 'cup' },
        { recipe_id: 2, ingredient_id: 6, quantity: 10, measurement: 'oz' },
        { recipe_id: 2, ingredient_id: 5, quantity: 4, measurement: 'ounce' },
        { recipe_id: 2, ingredient_id: 3, quantity: 1, measurement: 'teaspoon' },
        { recipe_id: 2, ingredient_id: 4, quantity: 1, measurement: 'teaspoon' },
        { recipe_id: 3, ingredient_id: 7, quantity: 4, measurement: 'medium size' },
        { recipe_id: 3, ingredient_id: 8, quantity: 2, measurement: 'cup' },
        { recipe_id: 3, ingredient_id: 9, quantity: 1, measurement: 'teaspoon' },
        { recipe_id: 3, ingredient_id: 10, quantity: 1, measurement: 'teaspoon' }
      ]);
    });
};

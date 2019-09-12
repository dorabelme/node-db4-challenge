
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: "olive oil" },               // 1
        { ingredient_name: "cauliflower" },             // 2
        { ingredient_name: "salt" },                    // 3
        { ingredient_name: "pepper" },                  // 4
        { ingredient_name: "parmesan cheese" },         // 5
        { ingredient_name: "pizza crusts" },            // 6
        { ingredient_name: "sweet potatoes" },          // 7
        { ingredient_name: "chickpeas" },               // 8
        { ingredient_name: "ginger" },                  // 9
        { ingredient_name: "vinegar" }                  // 10
      ]);
    });
};

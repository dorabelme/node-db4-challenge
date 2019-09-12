
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          step_number: 1,
          instruction: "Step 1 for recipe number 1.",
          recipe_id: 1
        },
        {
          step_number: 2,
          instruction: "Step 2 for recipe number 2."
          , recipe_id: 1
        },
        {
          step_number: 3,
          instruction: "Step 3 for recipe number 3.",
          recipe_id: 1
        },
        {
          step_number: 1,
          instruction: "Step 1 for recipe number 2",
          recipe_id: 2
        },
        {
          step_number: 2,
          instruction: "Step 2 for recipe number 2",
          recipe_id: 2
        },
        {
          step_number: 3,
          instruction: "Step 3 for recipe number 2",
          recipe_id: 2
        },
        {
          step_number: 1,
          instruction: "Step 1 for recipe number 3",
          recipe_id: 3
        },
        {
          step_number: 2,
          instruction: "Step 2 for recipe number 3",
          recipe_id: 3
        },
        {
          step_number: 3,
          instruction: "Step 3 for recipe number 3",
          recipe_id: 3
        },
      ]);
    });
};

const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}


function getRecipes() {
    return db("recipes")
}

function getShoppingList(id) {
    return db("recipe_ingredients as R")
        .innerJoin("recipes as RE", "R.recipe_id", "=", "RE.id")
        .innerJoin("ingredients as I", "R.ingredient_id", "=", "I.id")
        .select("RE.recipe_name", "I.ingredient_name", "R.quantity", "R.measurement")
        .where("RE.id", id)
}

function getInstructions(id) {
    return db("instructions as INS")
        .innerJoin("recipes as RE", "INS.recipe_id", "=", "RE.id")
        .select("RE.recipe_name", "INS.step_number", "INS.instruction")
        .where("RE.id", id)
}
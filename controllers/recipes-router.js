const router = require("express").Router();
const Recipes = require("./recipes-model.js");

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipes.getRecipe(id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: "Recipe not found." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const { name, dish_id, instructions } = req.body;
  if (!name) {
    res.status(400).json({ message: "Please provide a name for this recipe." });
  } else if (!dish_id) {
    res
      .status(400)
      .json({ message: "Please provide a dish_id for this recipe." });
  } else if (!instructions) {
    res
      .status(400)
      .json({ message: "Please provide instructions for this recipe." });
  }
  try {
    const [id] = await Recipes.addRecipe(req.body);
    const recipe = await Recipes.getRecipe(id);

    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

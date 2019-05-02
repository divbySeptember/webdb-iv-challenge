const router = require("express").Router();
const db = require("../config/knexConfig.js");
const Dishes = require("./dishes-model.js");

router.get("/", async (req, res) => {
  try {
    const dishes = await Dishes.getDishes();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dish = await Dishes.getDish(id);
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: "Dish not found." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ message: "Please provide a name for this dish." });
  }
  try {
    const [id] = await Dishes.addDish(req.body);
    const dish = await Dishes.getDish(id);

    res.status(201).json(dish);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

const restaurantController = require("./../controllers/restaurant.controller");
const router = require("express").Router();
router.post("/Restaurant/create", restaurantController.create);
router.get("/Restaurant/getAll", restaurantController.getAll);
router.get("/Restaurant/:id", restaurantController.getDetailsRestaurant);
router.get(
  "/Restaurant/getOneRestaurant/:id",
  restaurantController.getOne
);
router.put("/Restaurant/update", restaurantController.updateRes);
router.delete("/Restaurant/delete/:id", restaurantController.deleteRes);

module.exports = router;

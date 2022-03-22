const restaurantService = require("./../services/restaurant.service");
class Restaurant {
  create = async (req, res) => {
    const { idResOrSpa, name, arrType, description, benefit } = req.body;
    const result = await restaurantService.create({
      idResOrSpa,
      name,
      arrType,
      description,
      benefit,
    });
    return res.json({ result });
  };
  getAll = async (req, res) => {
    const result = await restaurantService.getAll();
    return res.json({ result });
  };
  getDetailsRestaurant = async (req, res) => {
    const { id } = req.params;
    const result = await restaurantService.getDetailsRestaurant(id);
    return res.json({ result });
  };
}
module.exports = new Restaurant();
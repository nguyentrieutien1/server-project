const accounts = require("./accounts.route");
const hotels = require("./hotel.route");
const partners = require("./partner.route");
const types = require("./type.route");
const login = require("./login.route");
const recommend = require("./recommend.route");
const recommendAll = require("./recommendAll.route");
const restaurant = require("./restaurant.route");
const spa = require("./spa.route");
module.exports = {
  run: (app) => {
    app.use("/", accounts);
    app.use("/", hotels);
    app.use("/", partners);
    app.use("/", types);
    app.use("/", login);
    app.use("/", recommend);
    app.use("/", recommendAll);
    app.use("/", restaurant);
    app.use("/", spa);
  },
};

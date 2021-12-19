const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.user = require("./user.model.js")(mongoose);
db.details = require("./details.model.js")(mongoose);
db.navbarbutton = require("./navbar-button.model.js")(mongoose);

module.exports = db;
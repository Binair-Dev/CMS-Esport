const { authenticateToken } = require("../_tool/authentificator.js");

module.exports = app => {
    const controller = require("../controllers/details.controller.js");
  
    var unsecured = require("express").Router();
    var secured = require("express").Router();
  
    unsecured.post("/install", controller.install);
    unsecured.get("/", controller.getDetails);
    secured.post("/", controller.update);
  
    app.use('/api/details', unsecured);
    app.use('/api/details', authenticateToken, secured);
  };
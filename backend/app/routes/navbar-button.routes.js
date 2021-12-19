const { authenticateToken } = require("../_tool/authentificator.js");

module.exports = app => {
    const controller = require("../controllers/navbarbutton.controller.js");
  
    var unsecured = require("express").Router();
    var secured = require("express").Router();
  
    unsecured.get("/", controller.getAll);
    secured.post("/", controller.create);
    secured.post("/:id", controller.update);
    secured.delete("/:id", controller.delete);
  
    app.use('/api/buttons', unsecured);
    app.use('/api/buttons', authenticateToken, secured);
  };
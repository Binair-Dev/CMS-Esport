require('dotenv').config()
const db = require("../models");
const NavbarButton = db.navbarbutton;

exports.create = (req, res) => {
    if(!req.user.isAdmin) {
        res.status(401).send("Unauthorized")
        return;
      }

    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    const button = new NavbarButton({
        Nom: req.body.Nom,
        Ordre: req.body.Ordre,
        Chemin: req.body.Chemin
    });
  
    NavbarButton
      .save(button)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };

  exports.getAll = (req, res) => {
    NavbarButton.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving user."
        });
      });
  };

  exports.update = (req, res) => {
  if(!req.user.isAdmin) {
    res.status(401).send("Unauthorized")
    return;
  }
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    const button = new NavbarButton({
        Nom: req.body.Nom,
        Ordre: req.body.Ordre
    });

    NavbarButton.find({Email: id})
      .then(data => {
        data.forEach(element => {
        if (!element) {
          res.status(404).send({
            message: `Cannot update User with id=${id}. Maybe User was not found!`
          });
        } else{
          element.updateOne({
            Nom: req.body.Nom,
            Ordre: req.body.Ordre,
            Chemin: req.body.Chemin 
          }).then(data => {
            res.status(200).send(data)
          });
        }});
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
  };

exports.delete = (req, res) => {
  if(!req.user.isAdmin) {
    res.status(401).send("Unauthorized")
    return;
  }
    const id = req.params.id;
  
    User.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete User with id=${id}. Maybe Property was not found!`
          });
        } else {
          res.send({
            message: "User was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
  };
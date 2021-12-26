const db = require("../models");
const Details = db.details;

exports.install = async (req, res) => {

  Details.find().then((data) => {

      let detail = new Details({
          Title: req.body.Title,
          Description: req.body.Description,
        });

      if(data.length === 0) {
          detail
            .save(detail)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the cms details."
              });
            });

      } else {
          res.status(403).send("Installation already done!");
      }
})
}

exports.getDetails = async (req, res) => {

  Details.find().then((data) => {
      if(data.length === 0) {
          res.send({amount: 0});
      } else {
          res.send(data);
      }
})
}

exports.update = async (req, res) => {

    Details.find().then((data) => {
        let detail = new Details({
            Title: req.body.Title,
            Description: req.body.Description,
          });
        data[0].updateOne({
            Title: detail.Title, 
            Prenom: detail.Description, 
          }).then(data => {
            res.status(200).send(data)
          }).catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while updating the cms details."
            });
        });
  })
}
const db = require("../models");
const auth = require("../_tool/authentificator");
const User = db.user;

exports.login = async (req, res) => {

  User.findOne({Pseudo: req.body.Pseudo}).then((data) => {

    let user = {
      _id: data._id,
      Pseudo: data.Pseudo,
      Nom: data.Nom,
      Prenom: data.Prenom,
      Email: data.Email,
      Password: data.Password,
      isAdmin: data.isAdmin
    }
    
    if(user !== null) {
      if(req.body.Pseudo !== user.Pseudo) {
        res.status(401).send('Invalid credentials')
        return;
      }
      if(req.body.Password !== user.Password) {
        res.status(401).send('Invalid credentials')
        return;
      }
      
      const accessToken = auth.generateToken(user);
      res.status(200).send({accessToken});
    }
    else {
      res.status(404).send("Not found")
    }
  }).catch(error => {
    res.status(404).send("Not found")
  })
}
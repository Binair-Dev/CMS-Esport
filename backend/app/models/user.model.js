module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        Pseudo: String,
        Nom: String,
        Prenom: String,
        Email: String,
        Password: String,
        isAdmin: Boolean,
      },{
        versionKey: false,
        collection: "users",
    });
    
    const User = mongoose.model("users", schema);
    return User;
  };
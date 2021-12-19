module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        Nom: String,
        Ordre: Number,
        Chemin: String,
      },{
        versionKey: false,
        collection: "navbarbuttons",
    });
    
    const NavbarButton = mongoose.model("navbarbuttons", schema);
    return NavbarButton;
  };
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        Title: String,
        Description: String,
        Rue: String,
        Numero: String,
        Pays: String,
        CodePostal: String,
        Apropos: String,
      },{
        versionKey: false,
        collection: "details",
    });
    
    const Details = mongoose.model("details", schema);
    return Details;
  };
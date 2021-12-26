module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        Title: String,
        Description: String,
      },{
        versionKey: false,
        collection: "details",
    });
    
    const Details = mongoose.model("details", schema);
    return Details;
  };
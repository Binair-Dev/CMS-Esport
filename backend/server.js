const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.sendStatus(401);
});

require("./app/routes/user.routes")(app);
require("./app/routes/login.routes")(app);
require("./app/routes/details.routes")(app);

const PORT = process.env.PORT || 5400;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
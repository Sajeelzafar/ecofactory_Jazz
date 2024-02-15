const express = require("express");
const app = express();
const router = require("./routers/router.js");
require('dotenv').config();
// const newrouter = require("./routers/testing-routes");
const cors = require("cors");
const PORT = process.env.PORT;
const db = require("./models");

app.use(express.json());
app.use(cors());

// app.use("/refactoredAPI", newrouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something Broke!");
});

db.sequelize.sync({ force: false }).then(async (req) => {
  app.use("/api", router);
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});

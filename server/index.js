const express = require("express");
const cors = require("cors");

const router = require("./routes/index");
const sequelize = require("./db.js");

require("dotenv").config();

const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

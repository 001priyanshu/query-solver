const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("*", cors());

const userRoutes = require("./routes/user");

app.use('/api/user',userRoutes);
    

const server = app.listen(PORT, () => {
  console.log("listening on port 8080");
});


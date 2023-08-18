const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("*", cors());


const userRoutes = require("./routes/user");
const chatRoutes = require("./routes/chat");
const messageRoutes = require("./routes/message");

app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);
app.use('/api/message',messageRoutes);
    
mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("Database connection is successfull");
});

const server = app.listen(PORT, () => {
  console.log("listening on port 8080");
});


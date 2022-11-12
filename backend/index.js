const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { addUser } = require("./controller/addUser");
const { getUsers } = require("./controller/getUsers");
const { getUser } = require("./controller/getUser");
const { deleteUser } = require("./controller/deleteUser");
const { updateUser } = require("./controller/updateUser");

const app = express();
app.use(cors());

app.use(express.json());
app.get("/users", getUsers);
app.get("/user/:id", getUser);
app.post("/user", addUser);
app.put("/user/:id", updateUser);
app.delete("/user/:id", deleteUser);

mongoose
  .connect(
    "mongodb+srv://kartik:kartik1235@deepbluecluster.wnkfe.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Service running on 5050");
    app.listen(5050);
  })
  .catch((err) => {
    console.log(err);
  });

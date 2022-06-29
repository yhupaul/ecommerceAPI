const express = require('express');
const app = express();
const mongoose = require("mongoose");

mongoose
.connect(
  "mongodb+srv://ydan:Lena1207@cluster0.wnuppec.mongodb.net/shop?retryWrites=true&w=majority"
  ) //this is secet key
.then(() => console.log("DBConnection Successfull!"))
.catch((err) => {
  console.log(err);
});

app.listen(8000, () => {
  console.log("Backend server is running!");
}); 
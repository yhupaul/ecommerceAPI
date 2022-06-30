const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv"); 
const userRoute = require("./routes/user");

dotenv.config();
//this is the way using env file for security

mongoose
.connect(process.env.MONGO_URL) //this is secet key
.then(() => console.log("DB Connection Successfull!"))
.catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PROT || 8000, () => { //it there is port, use the one in env file otherwhiles use local 8000
  console.log("Backend server is running!");
}); 
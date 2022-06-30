const router = require("express").Router();

router.get("/usertest", (reg, res) => {
  res.send("user test is successfull");
});

router.post("/userposttest", (reg, res) => {
  const username = reg.body.username;
  res.send("your username is: " + username);
})

module.exports = router
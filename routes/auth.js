const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password, process.env.PASS_SEC)
      .toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (reg, res) => {
  try {
    const user = await User.findOne({ username: reg.body.username });
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password, 
      process.env.PASS_SEC
      );

      const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      Originalpassword !== reg.body.password &&
        res.status(401).json("Wrong credentials!");

        const { password, ...others } = user._doc;
        res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router
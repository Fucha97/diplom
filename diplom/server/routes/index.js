const express = require("express");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const router = express.Router();



router.route("/api/login").post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email });

  if (!user) {
    res.json({ status: 1, error: "Такой пользователь не найден" });
  } else {
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      const message = "Не правильный password или email";
      res.json({ status: 1, error: message });
    } else {
      req.session.user = user;
      res.json({ username: user.username, hero: user.hero });
    }
  }
});

router.route("/api/signup").post(async (req, res) => {
  let newUser = await User.findOne({ login: req.body.login });
  if (!newUser) {
    console.log('ne upal');
    // const pass = await bcrypt.hash(req.body.pass, 12);
    console.log('ne upal2');

    const user = new User({
      login: req.body.login,
      password: req.body.pass,
      birth: req.body.birth,
      female: req.body.famele,
      fullName: req.body.fullName
    });
    await user.save();
    console.log('ne upal2');
    req.session.user = user;
    res.json({
      login: user.login,
    });
  } else {
    const message = "Такой пользователь уже существует";
    res.json({ status: 1, error: message });
  }
});

router.get("/api/check-session", async (req, res) => {
  const user = req.session.user;
  const error = false;
  if (user === undefined) {
    res.json(error);
  } else {
    res.json(user);
  }
});

router.get("/api/logout", async (req, res) => {
  req.session.destroy();
  res.json(true);
});

module.exports = router;

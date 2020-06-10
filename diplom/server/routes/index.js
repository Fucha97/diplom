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
  let newUser = await User.findOne({ email: req.body.email });
  if (!newUser) {
    const pass = await bcrypt.hash(req.body.password, 12);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: pass,
      player: {
        type: "player",
        name: req.body.username,
        avatar:
          "https://img.gifmagazine.net/gifmagazine/images/1301133/original.gif",
        percs: [],
        stats: {
          lvl: 1,
          health: 300,
          damage: 10
        },
        gold: 25
      }
    });
    await user.save();
    req.session.user = user;
    res.json({
      username: user.username,
      player: {
        type: user.type,
        name: user.username,
        avatar: user.avatar,
        percs: [user.percs],
        stats: { ...user.stats },
        gold: user.gold
      }
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

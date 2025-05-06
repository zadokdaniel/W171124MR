const _ = require("lodash");
const bcrypt = require("bcrypt");
const { User, userValidation } = require("../model/user");

const express = require("express");
const router = express.Router();

const authMW = require("../middleware/auth");

router.get("/me", authMW, async (req, res) => {
  res.json(await User.findById(req.user._id, { password: 0 }));
});

router.post("/", async (req, res) => {
  // validation user input
  const { error } = userValidation.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // validate system
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400).send("User already exists.");
    return;
  }

  // process
  user = await new User({
    ...req.body,
    password: await bcrypt.hash(req.body.password, 14),
  }).save();

  // response
  res.send(_.pick(user, ["_id", "name", "email", "biz", "createdAt"]));
});

module.exports = router;

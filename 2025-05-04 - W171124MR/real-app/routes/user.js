const { User, userValidation } = require("../model/user");

const express = require("express");
const router = express.Router();

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
  user = await new User(req.body).save();

  // response
  res.send(user);
});

module.exports = router;

const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  biz: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema, "users");

const userValidation = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  email: Joi.string().min(6).max(255).required(),
  password: Joi.string().min(6).max(1024).required(),
  biz: Joi.boolean().required(),
}).required();

module.exports = {
  User,
  userValidation,
};

const mongoose = require("mongoose");
const Joi = require("joi");
const _ = require("lodash");

const cardSchema = new mongoose.Schema({
  bizName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  bizDescription: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024,
  },
  bizAddress: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 400,
  },
  bizPhone: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 10,
  },
  bizImage: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 1024,
  },
  bizNumber: {
    type: Number,
    required: true,
    min: 100,
    max: 9_999_999_999,
    unique: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Card = mongoose.model("Card", cardSchema, "cards");

async function generateBizNumber() {
  while (true) {
    const random = _.random(100, 9_999_999_999);
    const card = await Card.findOne({ bizNumber: random });
    if (!card) {
      return random;
    }
  }
}

const cardValidation = Joi.object({
  bizName: Joi.string().min(2).max(255).required(),
  bizDescription: Joi.string().min(2).max(1024).required(),
  bizAddress: Joi.string().min(2).max(400).required(),
  bizPhone: Joi.string().min(9).max(10).required(),
  bizImage: Joi.string().min(11).max(1024),
}).required();

module.exports = {
  Card,
  cardValidation,
  generateBizNumber,
};

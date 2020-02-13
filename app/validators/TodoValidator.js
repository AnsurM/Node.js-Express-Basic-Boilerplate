const Joi = require("joi");

const schema = Joi.object().keys({
  title: Joi.string()
    .min(3)
    .required(),
  detail: Joi.string()
    .min(2)
    .max(100)
    .optional()
});

module.exports = schema;

const Joi = require("joi");

const schema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .optional(),
  password: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainAtoms: 2 })
    .required(),
  name: Joi.string()
    .alphanum()
    .min(2)
    .max(100)
    .optional(),
  surname: Joi.string()
    .alphanum()
    .min(2)
    .max(100)
    .optional()
});

module.exports = schema;

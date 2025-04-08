const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  
});

module.exports = { userSchema };

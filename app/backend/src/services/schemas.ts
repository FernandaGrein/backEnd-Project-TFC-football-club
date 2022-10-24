import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email().isrequired(),
  password: Joi.string().min(6).isrequired(),
});

export default loginSchema;

import joi from "joi";
const Joi = require("joi");
function validateInsert(mail) {
  const schema = Joi.object({
    name: Joi.string().min(1).required(),
    field: Joi.string().min(1).required(),
    type: Joi.string().min(1).required(),
    default_value: Joi.any().required(),
  });
  return schema.validate(mail);
}
export function validateUpdate(mail) {
  const schema = Joi.object({
    _id: Joi.string().min(5).required(),
    name: Joi.string().min(1).required(),
    field: Joi.string().min(1).required(),
    type: Joi.string().min(1).required(),
    default_value: Joi.any().required(),
  });
  return schema.validate(mail);
}
export default validateInsert;

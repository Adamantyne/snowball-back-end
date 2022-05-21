import Joi from "joi";

export const questionSchema = Joi.object({
    question:   Joi.string().required(),
    answer:   Joi.string().required(),
    email:   Joi.string().email().required()
});

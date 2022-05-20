import Joi from "joi";

export const videoSchema = Joi.object({
    type:   Joi.string().required(),
    link:   Joi.string().required(),
    title:   Joi.string().required(),
    email:   Joi.string().email().required()
});

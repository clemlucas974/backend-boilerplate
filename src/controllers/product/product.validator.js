const Joi = require('joi');

export const createProduct = {
  body: {
    title: Joi.string().required(),
    subtitle: Joi.string().required(),
    description: Joi.string().required(),
    image_url: Joi.string().required(),
  },
};

export const udpateProduct = {
  body: {
    title: Joi.string(),
    subtitle: Joi.string(),
    description: Joi.string(),
    image_url: Joi.string(),
  },
};

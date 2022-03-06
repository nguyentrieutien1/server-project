const Joi = require("joi");
module.exports = {
  authenUpdateAccount: async ({ fullname, email, phone, username }) => {
    const schema = Joi.object({
      fullname: Joi.string().min(3).max(30).required(),
      phone: Joi.string().min(3).max(30).required(),
      username: Joi.string().min(3).max(30).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    });
    try {
      const value = await schema.validateAsync({
        fullname,
        email,
        phone,
        username,
      });
      return {
        statusCode: 200,
        value,
      };
    } catch (error) {
      return {
        statusCode: 400,
        error,
      };
    }
  },
};

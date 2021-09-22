const joi = require("@hapi/joi");

const schema = {
    user: joi.object({
        firstName: joi.string().max(100).required(),
        lastName: joi.string().max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")).required()
    })
}

module.exports = schema;
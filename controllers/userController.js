const userService = require("../services/userService");
const Joi = require('joi');
const bcrypt = require('bcrypt');



const createUserSchema = Joi.object(
  {
     userName : Joi.string().required().min(3).max(35),
     email : Joi.string().email().required(),
     password : Joi.string().required(),
  }
);


module.exports = {
createUser : async function(req , res)
{
  try{

        const validate = await createUserSchema.validateAsync(req.body);
        if(validate.error)
        {
          res.send(validate.error);
        }
        const response = userService.createUser(validate);
        res.send(response);
}
catch (error) {res.send (error);}},

getUser : function(req , res)
{
  const response = userService.getUser();
  res.send(response)
},

getUserByEmail: async function (req, res) {
  try {
    const validate = await getUserByEmail.validateAsync(req.query);
    if (validate.error) {
      res.status(StatusCodes.BAD_REQUEST).send({
        data: {},
        message: ReasonPhrases.BAD_REQUEST,
        error: validate.error,
      });
    }
    const response = await userService.getUserByEmail(validate.email);
    res.status(StatusCodes.OK).send({
      data: { response },
      message: ReasonPhrases.OK,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).send({
      data: {},
      message: ReasonPhrases.NOT_FOUND,
      error: error,
    });
  }
},

};
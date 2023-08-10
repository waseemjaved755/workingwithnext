const userService = require("../services/userService");
const Joi = require('joi');


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

};
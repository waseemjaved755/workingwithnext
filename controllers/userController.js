const userService = require("../services/userService");

module.exports = {
createUser : function(req , res)
{
  const response = userService.createUser();
  res.send(response)
},

getUser : function(req , res)
{
  const response = userService.getUser();
  res.send(response)
},

};
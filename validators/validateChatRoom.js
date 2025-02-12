const isEmpty = require("./isEmpty");
const validator = require("validator");

/* chatRoom  validator */
module.exports = function ValidateLogin(data) {
    let errors= {}
    
    data.roomName = !isEmpty(data.roomName)? data.roomName:"";

    if (validator.isEmpty(data.roomName)){
        errors.roomName = "required chat name"
    }
   
    return{
        errors,
        isValid: isEmpty(errors),
    };
};
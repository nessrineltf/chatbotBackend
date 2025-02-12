const isEmpty = require("./isEmpty");
const validator = require("validator");
module.exports = function validateRegister(data) {
  let errors = {};
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  //data.photo = !isEmpty(data.photo) ? data.photo : "";

  if (validator.isEmpty(data.firstName)) {
    errors.firstName = "required firstName";
  }
  if (validator.isEmpty(data.lastName)) {
    errors.lastName = "required lastName";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "required email";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "required format email";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "required password";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

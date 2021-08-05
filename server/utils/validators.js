const User = require("./../model/user");
module.exports.validateRegisterInput = async (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "username can't be empty";
  } else {
    const user = await User.findOne({ username });
    if (user) {
      errors.username = "username is taken";
    }
  }

  if (email.trim() === "") {
    errors.email = "email can't be empty";
  } else if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    erros.email = "invalid email";
  }

  if (password.length < 8) {
    errors.password = "password length is too short ";
  } else if (password !== confirmPassword) {
    errors.password = "password doesn't match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (email, password) => {
  errors = {};
  if (email.trim() === "") {
    errors.email = "email can't be empty";
  } else if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    erros.email = "invalid email";
  }
  if (password.length < 8) {
    errors.password = "password length is too short ";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

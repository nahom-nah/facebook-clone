const { AuthenticationError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

async function checkAuth(req) {
  const token = req.session.token;
  if (token) {
    try {
      const verify = await jwt.verify(token, process.env.SECRET);

      const user = await User.findById(verify.id);

      if (!user) {
        throw new AuthenticationError("User Not found, invalid credentials");
      }
      return { userId: verify.id };
    } catch (err) {
      throw new AuthenticationError("Invalid/expired token");
    }
  }
  throw new Error("Authentication token must be provided");
}

module.exports = {
  checkAuth,
};

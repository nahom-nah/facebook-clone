const User = require("./../../model/user");
const {
  UserInputError,
  AuthenticationError,
} = require("apollo-server-express");
const crypto = require("crypto");
const {
  validateRegisterInput,
  validateLoginInput,
} = require("./../../utils/validators");
const { checkAuth } = require("./../../utils/check-auth");
const jwt = require("jsonwebtoken");

const signToken = async (user_id) => {
  const token = await jwt.sign({ id: user_id }, process.env.SECRET, {
    expiresIn: "1d",
  });
  return token;
};
module.exports = {
  Query: {
    hello: () => "hello world",
    async IsAuthenticated(_, args, context) {
      const { req, res } = context;
      const { userId } = await checkAuth(req);

      const user = await User.findById(userId);

      if (!user) {
        throw new AuthenticationError("User Not found, invalid credentials");
      }

      return {
        isAuthenticated: true,
        user,
      };
    },
  },

  Mutation: {
    async login(_, { user: { email, password } }, context) {
      const { req, res } = context;
      const { errors, valid } = await validateLoginInput(email, password);

      if (!valid) {
        throw new UserInputError("Errors", {
          errors,
        });
      }

      const user = await User.findOne({ email });
      if (!user) {
        throw new UserInputError("User Not Found", {
          errors: {
            userNotFound: "no user found",
          },
        });
      }

      const passcomp =
        user.password ===
        crypto
          .pbkdf2Sync(password, user.salt, 10000, 64, "sha512")
          .toString("hex");
      if (!passcomp) {
        throw new UserInputError("Wrong Crendetials", {
          errors: {
            wrongCrendetails: "incorrect password",
          },
        });
      }

      const token = await signToken(user._id);
      req.session.token = token;
      return {
        id: user._id,
        username: user.username,
        email: user.email,
        token: token,
        createdAt: user.createdAt,
      };
    },
    async register(
      _,
      { user: { username, email, password, confirmPassword } },
      context
    ) {
      const { res, req } = context;
      const { errors, valid } = await validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );

      if (!valid) {
        throw new UserInputError("Errors", {
          errors,
        });
      }
      const user = await User.findOne({ email });
      if (user) {
        throw new UserInputError("User already exist", {
          errors: {
            email: "there is a user with this email address, sign in!",
          },
        });
      }
      const salt = crypto.randomBytes(16).toString("hex");
      const hashPass = crypto
        .pbkdf2Sync(password, salt, 10000, 64, "sha512")
        .toString("hex");

      const newUser = await User.create({
        username,
        email,
        salt,
        password: hashPass,
      });
      const token = await signToken(newUser._id);
      req.session.token = token;
      return {
        id: user._id,
        username: newUser.username,
        email: newUser.email,
        token: token,
        createdAt: newUser.createdAt,
      };
    },
  },
};

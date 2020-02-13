const passport = require("passport");
const generateJWT = require(process.cwd() + "/utils/generateJWT");
const generateHash = require(process.cwd() + "/utils/generateHash");
const User = require(process.cwd() + "/models").User;
const Joi = require("joi");
const UserValidator = require("../validators/UserValidator");

const loginController = async (req, res, next) => {
  const {
    body: { user }
  } = req;
  const result = Joi.validate(user, UserValidator);

  if (result.error) {
    return res.status(422).json({
      errors: result.error
    });
  }

  return passport.authenticate(
    "local",
    { session: false },
    (err, passportUser, info) => {
      if (err) {
        return next(err);
      }

      if (passportUser) {
        const user = {
          _id: passportUser.id,
          email: passportUser.email,
          name: passportUser.name,
          surname: passportUser.surname,
          token: generateJWT(passportUser)
        };
        return res.json({ user });
      }

      return res.status(400).send(info);
    }
  )(req, res, next);
};

const signupController = async (req, res, next) => {
  let {
    body: { user }
  } = req;
  const result = Joi.validate(user, UserValidator);
  if (result.error) {
    return res.status(422).json({
      errors: result.error
    });
  }
  let hashedPassword = await generateHash(user.password);
  user.password = hashedPassword;
  try {
    let newUser = await User.create(user);
    delete newUser.dataValues.password;
    return res.json({ newUser });
  } catch (e) {
    return res.status(500).json(e);
  }
};

const listController = async (req, res, next) => {
  User.findAll().then(users => {
    return res.status(200).json(users);
  });
};

module.exports = {
  loginController,
  signupController,
  listController
};

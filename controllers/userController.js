const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const validateRegister = require("../validators/validateRegister");
const jwt = require("jsonwebtoken");
const validateLogin = require("../validators/validateLogin");

// register
exports.Register = async (req, res) => {
  const { errors, isValid } = validateRegister(req.body);
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  try {
    if (!isValid) {
      res.status(500).json(errors);
    } else {
      const exist = await UserModel.findOne({ email: req.body.email });
      if (exist) {
        return res.status(404).json({ email: "user exist please try again" });
      }
      await UserModel.create(req.body).then((result) => {
        res.status(200).json({ message: "success", result });
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Login

exports.Login = async (req, res) => {
  const { errors, isValid } = validateLogin(req.body);
  try {
    if (!isValid) {
      res.status(500).json(errors);
    } else {
      const existUser = await UserModel.findOne({ email: req.body.email });
      if (!existUser) {
        res.status(404).send({ email: " user not exist please create one " });
      } else {
        const match = await bcrypt.compare(
          req.body.password,
          existUser.password
        );
        if (!match) {
          res.status(404).json({ password: "not valid password" });
        } else {
          const payload = {
            id: existUser._id,
            firstName: existUser.firstName,
            lastName: existUser.lastName,
            email: existUser.email,
          };
          //const expirationTime = Math.floor(Date.now() / 1000) + 15 * 60;
          const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "900",
          });
          res.status(200).json({ token: token });
        }
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


const User = require("../models/Users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.usersController = {
  getAllUsers: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },

  registerUser: async (req, res) => {
    try {
      const { login, password } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const user = await User.create({ login, password: hash });

      res.json(user);
    } catch (e) {
      return res.status(400).json({
        error: "ошибка при регистрации: " + e.message,
      });
    }
  },

  login: async (req, res) => {
    try {
      const { login, password } = req.body;

      const candidate = await User.findOne({ login });
      if (!candidate) {
        return res.status(401).json({ error: "Неверный логин" });
      }
      // res.json(candidate);

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.status(401).json("Неверный пароль");
      }

      const payload = {
        id: candidate._id,
        login: candidate.login,
      };

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });

      res.json({ token });
    } catch {
      res
        .status(401)
        .json({ error: "LogОшибка при регистрации : " + error.toString()});
    }
  },
};

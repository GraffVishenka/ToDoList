const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/models.js");

const generateJWT = (
  id,
  email,
  role,
  firstname,
  surname,
  patronymic,
  department
) => {
  return jwt.sign(
    { id, email, role, firstname, surname, patronymic, department },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
    }
  );
};

class UserController {
  async login(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Пожалуйста, заполните обязательные поля" });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(500)
        .json({ message: "Пользователь с таким email не найден!" });
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return res
        .status(400)
        .json({ message: "Неверно введен логин или пароль" });
    }

    const token = generateJWT(
      user.id,
      user.email,
      user.role,
      user.firstname,
      user.surname,
      user.patronymic,
      user.department
    );

    return res.json({ user, token });
  }

  async registration(req, res, next) {
    const {
      email,
      password,
      role,
      firstname,
      surname,
      patronymic,
      department,
    } = req.body;

    if (
      !email ||
      !password ||
      !firstname ||
      !surname ||
      !patronymic ||
      !department
    ) {
      return res
        .status(400)
        .json({ message: "Пожалуйста, заполните обязательные поля" });
    }

    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return res
        .status(404)
        .json({ message: "Пользоваетель с таким email уже существует!" });
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      role,
      password: hashPassword,
      firstname,
      surname,
      patronymic,
      department,
    });

    const token = generateJWT(
      user.id,
      user.email,
      user.role,
      user.firstname,
      user.surname,
      user.patronymic,
      user.department
    );

    return res.json({ user, token });
  }

  async current(req, res, next) {
    const user = req.user;
    const token = generateJWT(
      user.id,
      user.email,
      user.role,
      user.firstname,
      user.surname,
      user.patronymic,
      user.department
    );
    return res.json({user, token})
  }

  
}

module.exports = new UserController();

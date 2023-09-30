const { Op } = require("sequelize");
const { Todo, User } = require("../models/models");
const jwt = require("jsonwebtoken");
const TodoDto = require("../dto/todoDto");

const getToday = () => {
  let date = new Date();
  let startDay = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  startDay.setHours(0);
  startDay.setMinutes(0);
  startDay.setSeconds(0);
  let endDay = date.setDate(date.getDate() + 1);

  return { startDay: startDay, endDay: endDay };
};

const getWeek = () => {
  const date1 = new Date();
  const date2 = new Date();

  date1.setHours(0);
  date1.setMinutes(0);
  date1.setSeconds(0);

  date2.setHours(0);
  date2.setMinutes(0);
  date2.setSeconds(0);
  const date3 = new Date().getDay();
  console.log(date3);
  let startWeek = new Date();
  let endWeek = new Date();
  if (date3 !== 0) {
    startWeek = date1.setDate(date1.getDate() - date3 + 1);
    endWeek = date2.setDate(date2.getDate() + 8 - date3);
  } else {
    startWeek = date1.setDate(date1.getDate() + 1);
    endWeek = date2.setDate(date2.getDate() + 8);
  }

  return { startWeek: startWeek, endWeek: endWeek };
};

class TodosController {
  async create(req, res) {
    const { header, description, deadline, responsible, status, priority } =
      req.body;
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const todo = await Todo.create({
      header,
      description,
      deadline,
      responsible,
      status,
      priority,
      userId: decoded.id,
    });
    return res.json(todo);
  }

  async getByResponsible(req, res, next) {
    const { id } = req.params;

    try {
      const user = await User.findAll({ where: { responsible: id } });
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json({ message: "Не удалось найти задачи" });
    }
  }

  async getAllMyTodos(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const todos = await Todo.findAll({
      where: { responsible: decoded.id },
    });
    const normalResponsible = `${decoded.surname} ${decoded.firstname} ${decoded.patronymic}`;
    const cloneTodos = JSON.parse(JSON.stringify(todos));

    for (let i = 0; i < todos.length; i++) {
      const dt = new Date(cloneTodos[i].deadline)
      
      console.log(dt.toLocaleDateString())
      cloneTodos[i].responsible = normalResponsible;
      cloneTodos[i].deadline = dt.toLocaleDateString();
    }
    return res.json(cloneTodos);
  }

  async getAllForToday(req, res, next) {
    const { startDay, endDay } = getToday();
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const todos = await Todo.findAll({
      where: {
        [Op.and]: [
          { responsible: decoded.id },
          { deadline: { [Op.between]: [startDay, endDay] } },
        ],
      },
    });
    return res.json(todos);
  }

  async getAllForAWeek(req, res, next) {
    const { startWeek, endWeek } = getWeek();
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const todos = await Todo.findAll({
      where: {
        [Op.and]: [
          { responsible: decoded.id },
          { deadline: { [Op.between]: [startWeek, endWeek] } },
        ],
      },
    });
    return res.json(todos);
  }

  async editTodo(req, res, next) {
    const data = req.body;
    const id = data.id;

    try {
      await Todo.update({ where: { id }, data });
    } catch (e) {
      res.status(500).json({ message: "Не удалось изменить задание" });
    }
  }

  async getOneById(req, res, next) {
    const { id } = req.params;

    try {
      const todo = await Todo.findOne({ where: { id } });
      res.status(200).json(todo);
    } catch (e) {
      res.status(500).json({ message: "Не удалось открыть задание" });
    }
  }

  async getMyUsers(req, res, next) {
    const { id } = req.body;

    try {
      const user = await User.findAll({ where: { id } });
      res.status(200).json(user);
    } catch (e) {
      res
        .status(500)
        .json({ message: "Не удалось получить задачи сотрудника" });
    }
  }
}

module.exports = new TodosController();

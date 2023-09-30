const sequelize = require("../db.js");
const { INTEGER, STRING, DATE } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: STRING, unique: true, allowNull: false },
  password: { type: STRING, allowNull: false },
  firstname: { type: STRING, allowNull: false },
  surname: { type: STRING, allowNull: false },
  patronymic: { type: STRING, allowNull: false },
  role: { type: STRING, allowNull: false, defaultValue:"USER" },
  department: { type: STRING, allowNull: false },
});

const Todo = sequelize.define("todo", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  header: { type: STRING, allowNull: false },
  description: { type: STRING, allowNull: false },
  deadline: {type: DATE, allowNull:false},
  responsible: { type: INTEGER, allowNull: false },
  status: { type: STRING, defaultValue: "К выполнению" },
  priority:{ type: STRING, defaultValue: "Средний" }
});


User.hasMany(Todo);
Todo.belongsTo(User);

module.exports = {
  User,
  Todo,
};
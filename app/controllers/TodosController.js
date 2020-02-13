const Todo = require(process.cwd() + "/models").Todo;

const Joi = require("joi");
const TodoValidator = require("../validators/TodoValidator.js");

const index = async (req, res) =>
  await Todo.findAll().then(todos => res.status(200).json(todos));

const getTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findOne({ where: id }).then(todo =>
    res.status(200).json(JSON.stringify(todo))
  );
};

const createTodo = async (req, res) => {
  const {
    body: { todo }
  } = req;
  const result = Joi.validate(todo, TodoValidator);
  if (result.error) {
    return res.status(422).json({
      errors: result.error
    });
  }
  try {
    const todo = await Todo.create(req.body.todo);
    return res.json({ todo });
  } catch (e) {
    return res.status(500).json({
      errors: e
    });
  }
};

const updateTodo = async (req, res) => {
  const { todo } = req.params;
  const result = Joi.validate(todo, TodoValidator);
  if (result.error) {
    return res.status(422).json({
      errors: result.error
    });
  }
  await Todo.update({ ...todo }, { where: { id: todo.id } }).then(function(
    record
  ) {
    return res.status(201).json(JSON.stringify(record));
  });
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.destroy({ where: { id } }).then(function(record) {
    return res.status(200).json(JSON.stringify(record));
  });
};

module.exports = {
  index,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
};

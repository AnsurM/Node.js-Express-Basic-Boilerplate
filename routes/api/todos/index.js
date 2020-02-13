const router = require("express").Router();
const auth = require("../../auth");
const todosController = require(`${process.cwd()}/app/controllers/TodosController`);

router.use(auth.required);

router.get("/", todosController.index);
router.get("/:id", todosController.getTodo);
router.post("/create", todosController.createTodo);
router.patch("/update", todosController.updateTodo);
router.delete("/delete", todosController.deleteTodo);

module.exports = router;

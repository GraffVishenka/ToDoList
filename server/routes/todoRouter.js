const Router = require("express");

const todoController = require("../controllers/todoController");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const checkRole = require("../middleware/RoleMiddleware.js");

const router = new Router();

router.post("/", AuthMiddleware, todoController.create);
router.get("/responsible",checkRole("MANAGER") , AuthMiddleware, todoController.getByResponsible);
router.get("/", AuthMiddleware, todoController.getAllMyTodos);
router.get("/today", AuthMiddleware, todoController.getAllForToday);
router.get("/week", AuthMiddleware, todoController.getAllForAWeek);
router.get("/:id", AuthMiddleware, todoController.getOneById);
router.put("/:id", AuthMiddleware, todoController.editTodo);

module.exports = router;

const Router = require("express");

const router = new Router();
const usersController = require("../controllers/usersController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

router.post("/login", usersController.login);
router.post("/registration", usersController.registration);
router.get("/current", AuthMiddleware, usersController.current);


module.exports = router;

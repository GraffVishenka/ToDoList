const Router = require("express");

const userRouter = require("./usersRouter");
const todoRouter = require("./todoRouter");

const router = new Router();

router.use("/", userRouter);
router.use("/todos", todoRouter);

module.exports = router;

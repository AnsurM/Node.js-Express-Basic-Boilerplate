/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */
const router = require("express").Router();
const auth = require("../../auth");
const UserController = require(`${process.cwd()}/app/controllers/UserController`);

// Defining router level auth middleware
router.use(auth.optional);

/* POST login route */
router.post("/login", UserController.loginController);
/* POST signup route */
router.post("/signup", UserController.signupController);
/* GET list route */
router.get("/list", auth.required, UserController.listController);

module.exports = router;

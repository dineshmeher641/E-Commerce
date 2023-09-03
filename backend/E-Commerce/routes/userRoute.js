const express = require("express");
const router = express.Router()
const userController = require("../controller/user_controller");
const { authMiddleware,isAdmin} = require("../middlewares/authMiddleware");


router.post("/register",userController.createUser)
router.post("/login",userController.loginUser)
router.get("/getAllUsers",authMiddleware,isAdmin,userController.getAll)
router.get("/:id",userController.getaUser)
router.delete("/:id",userController.deleteUser)

module.exports=router
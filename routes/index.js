const express = require("express");
const addUserController = require("../controller/addUserController");
const userListController = require("../controller/userListController");

const router = express.Router();

router.post("/adduser", addUserController);
router.get("/userlist", userListController);

module.exports = router;

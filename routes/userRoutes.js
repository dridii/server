const { Router } = require("express");
const { getUsers } = require("../controller/userController");

const router = Router();

router.get("/user", getUsers);

module.exports = router;

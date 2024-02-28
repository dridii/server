const { Router } = require("express");
const { getrecette } = require("../controller/Rectte");
const router = Router();
router.get("/recette",getrecette)
module.exports = router;

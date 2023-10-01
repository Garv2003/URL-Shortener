const controller = require("../controller/controller");
const router = require("express").Router();

router.get("/",controller.gethome);
router.post("/addurl",controller.posturl);
router.get(`/shorturl/:id`,controller.geturl);
router.get("/:id", controller.redirecturl);

module.exports = router;

const express = require("express");
const { WorkController } = require("../controllers/work.controllers");
const { Auth } = require("../middlewares/auth.middlewares");

const router = express.Router();

//get requests
router.get("/", WorkController.getAll);
router.get("/own", [Auth], WorkController.getOwn);
router.get("/:id", WorkController.getById);

//post requests
router.post("/", WorkController.create);
router.put("/:id", [Auth], WorkController.update);

//put requests
router.delete("/:id", [Auth], WorkController.delete);

module.exports.WorkRouter = router;

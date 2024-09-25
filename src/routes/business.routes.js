const express = require("express");
const { BusinessController } = require("../controllers/business.controllers");
const { Auth } = require("../middlewares/auth.middlewares");

const router = express.Router();

//get requests
router.get("/", BusinessController.getAll);
router.get("/own", [Auth], BusinessController.getOwn);
router.get("/:id", BusinessController.getById);

//post requests
router.post("/", BusinessController.create);
router.put("/:id", [Auth], BusinessController.update);

//put requests
router.delete("/:id", [Auth], BusinessController.delete);

module.exports.BusinessRouter = router;

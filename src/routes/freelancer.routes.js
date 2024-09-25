const express = require("express");
const { FreelancerController } = require("../controllers/freelancer.controllers");
const { Auth } = require("../middlewares/auth.middlewares");

const router = express.Router();

//get requests
router.get("/", FreelancerController.getAll);
router.get("/own", [Auth], FreelancerController.getOwn);
router.get("/:id", FreelancerController.getById);

//post requests
router.post("/", FreelancerController.create);
router.put("/:id", [Auth], FreelancerController.update);

//put requests
router.delete("/:id", [Auth], FreelancerController.delete);

module.exports.FreelancerRouter = router;

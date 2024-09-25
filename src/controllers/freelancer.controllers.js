const HttpError = require("../helpers/HttpError.helpers");
const Response = require("../helpers/Response.helpers");
const { FreelancerService } = require("../services/freelancer.service");

class FreelancerController {
  create = async (req, res) => {
    const data = await FreelancerService.create({ ...req.body });
    Response(res).body(data).send();
  };
  getAll = async (req, res) => {
    const { title, type } = req.query;
    const filter = {};
    if (title) {
      filter.name = { $regex: new RegExp(title, "i") };
    }
    if (type) {
      filter.type = type;
    }
    const data = await FreelancerService.find(filter).sort({ createdAt: -1 });

    Response(res).body(data).send();
  };
  getById = async (req, res) => {
    const data = await FreelancerService.findById(req.params.id).select("-__v");
    Response(res).body(data).send();
  };
  getOwn = async (req, res) => {
    const { category, type } = req.query;
    const filter = {
      user: req.user._id,
    };
    if (category) filter.category = category;
    if (type) filter.type = type;
    const data = await FreelancerService.find(filter);
    Response(res).body(data).send();
  };
  update = async (req, res) => {
    const data = await FreelancerService.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    if (!data) {
      return res.status(404).json({ message: " not found" });
    }

    Response(res).body(data).send();
  };
  delete = async (req, res) => {
    const data = await FreelancerService.findByIdAndDelete(req.params.id);
    Response(res).body(data).send();
  };
}

module.exports.FreelancerController = new FreelancerController();

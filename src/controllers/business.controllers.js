const HttpError = require("../helpers/HttpError.helpers");
const Response = require("../helpers/Response.helpers");
const { BusinessService } = require("../services/business.service");

class BusinessController {
  create = async (req, res) => {
    const data = await BusinessService.create({ ...req.body });
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
    const data = await BusinessService.find(filter).sort({ createdAt: -1 });

    Response(res).body(data).send();
  };
  getById = async (req, res) => {
    const data = await BusinessService.findById(req.params.id).select("-__v");
    Response(res).body(data).send();
  };
  getOwn = async (req, res) => {
    const { category, type } = req.query;
    const filter = {
      user: req.user._id,
    };
    if (category) filter.category = category;
    if (type) filter.type = type;
    const data = await BusinessService.find(filter);
    Response(res).body(data).send();
  };
  update = async (req, res) => {
    const data = await BusinessService.findByIdAndUpdate(
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
    const data = await BusinessService.findByIdAndDelete(req.params.id);
    Response(res).body(data).send();
  };
}

module.exports.BusinessController = new BusinessController();

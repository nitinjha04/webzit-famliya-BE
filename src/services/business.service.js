const { Business } = require("../models/Business.modal");
const BasicServices = require("./basic.service");

class BusinessService extends BasicServices {
  constructor() {
    super(Business);
  }
}

module.exports.BusinessService = new BusinessService();

const { Freelancer } = require("../models/Freelancer.modal");
const BasicServices = require("./basic.service");

class FreelancerService extends BasicServices {
  constructor() {
    super(Freelancer);
  }
}

module.exports.FreelancerService = new FreelancerService();

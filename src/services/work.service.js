const { Work } = require("../models/Work.modal");
const BasicServices = require("./basic.service");

class WorkService extends BasicServices {
  constructor() {
    super(Work);
  }
}

module.exports.WorkService = new WorkService();

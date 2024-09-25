const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
    },
    image: {
      url: {
        type: String,
      },
      urlId: {
        type: String,
      },
    },
    name: {
      type: String,
    },
    category: {
      type: String,
    },

    customerVisit: {
      type: Boolean,
      default: false,
    },
    address: {
      type: {
        address: String,
        city: String,
        state: String,
        zipcode: String,
      },
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    hours: {
      timeZone: {
        type: String,
        default: "UTC",
      },
      monday: {
        enabled: { type: Boolean, default: false },
        from: { type: String, default: null },
        to: { type: String, default: null },
      },
      tuesday: {
        enabled: { type: Boolean, default: false },
        from: { type: String, default: null },
        to: { type: String, default: null },
      },
      wednesday: {
        enabled: { type: Boolean, default: false },
        from: { type: String, default: null },
        to: { type: String, default: null },
      },
      thursday: {
        enabled: { type: Boolean, default: false },
        from: { type: String, default: null },
        to: { type: String, default: null },
      },
      friday: {
        enabled: { type: Boolean, default: false },
        from: { type: String, default: null },
        to: { type: String, default: null },
      },
      saturday: {
        enabled: { type: Boolean, default: false },
        from: { type: String, default: null },
        to: { type: String, default: null },
      },
      sunday: {
        enabled: { type: Boolean, default: false },
        from: { type: String, default: null },
        to: { type: String, default: null },
      },
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

exports.Business = mongoose.model("Business", Schema);

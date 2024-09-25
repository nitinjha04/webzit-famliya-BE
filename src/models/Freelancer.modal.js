const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
    },
    role: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      service: {
        type: String,
      },
      hourlyRate: {
        type: String,
      },
    },
    workExperience: {
      image: {
        type: String,
      },
      role: {
        type: String,
      },
      organization: {
        type: String,
      },
      duration: {
        from: {
          type: Date,
        },
        to: {
          type: Date,
        },
      },
      hourlyRate: {
        type: String,
      },
    },
    education: {
      image: {
        type: String,
      },
      program: {
        type: String,
      },
      institute: {
        type: String,
      },
      duration: {
        from: {
          type: Date,
        },
        to: {
          type: Date,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

exports.Freelancer = mongoose.model("Freelancer", Schema);

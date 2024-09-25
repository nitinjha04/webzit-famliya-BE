const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Hasher = require("../helpers/Hasher.helper");
const { JWT_SECRET } = process.env;

const Schema = new mongoose.Schema(
  {
    profilePicture: {
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
    email: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

Schema.pre("save", async function (next) {
  let user = this;
  if (!user.isModified("password")) return next();

  const salt = await Hasher.getSalt(10);

  const hash = await Hasher.hash(user.password, salt);

  user.password = hash;
  next();
});

Schema.methods.comparePassword = function (candidatePassword) {
  return new Promise((resolve, reject) => {
    Hasher.compare(candidatePassword, this.password)
      .then((isMatch) => resolve(isMatch))
      .catch((err) => reject(err));
  });
};

Schema.methods.generateToken = (data) => {
  return jwt.sign(
    { ...data },
    JWT_SECRET
  );
};
Schema.methods.generateVerifyEmailToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
    },
    JWT_EMAIL_VERIFY_SECRET || "abcd"
  );
};

exports.User = mongoose.model("User", Schema);

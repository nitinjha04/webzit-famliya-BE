const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports.Auth = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send({
      error: true,
      result: null,
      message: "UnAuthorized",
    });
  }
  const splitToken = token.split(" ")[1];
  // console.info({token})
  if (splitToken && splitToken === "null") {
    return res.status(401).send({
      error: true,
      result: null,
      message: "UnAuthorized",
    });
  }
  const decodedData = jwt.verify(splitToken, JWT_SECRET);
  if (!decodedData) {
    return res.status(401).send({
      error: true,
      result: null,
      message: "UnAuthorized",
    });
  }
  req.user = decodedData;

  console.info("<------------Authentication--------->");
  console.info({ token, decodedData });
  console.info("<----------------End---------------->");

  next();
};

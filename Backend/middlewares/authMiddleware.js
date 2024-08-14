
const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res.status(401).send({
        message: "Authorization header is missing",
        success: false,
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).send({
        message: "Token is missing",
        success: false,
      });
    }

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          message: "Auth Failed",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};


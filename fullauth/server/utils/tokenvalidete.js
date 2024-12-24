const jwtutil = require("./jwt");
const validate = async (req, res, next) => {
  let token = null;
  //   console.log(req.headers);
  if (req.headers.authorization) {
    token = req.headers.authorization.replace("Bearer ", "");
    let verify_ = await jwtutil.verify(token);
    next();
    console.log(verify_);
  }
};

module.exports = validate;

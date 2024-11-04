import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();
export const auth = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("Not Authorized");
    }

    const payLoad = jwt.verify(jwtToken, process.env.JWTSECRET);
    req.user = payLoad.user;
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(403).json(" Not Authorize ");
  }
};

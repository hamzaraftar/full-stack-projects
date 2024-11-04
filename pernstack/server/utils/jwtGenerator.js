import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

function jwtGenerator(user_id) {
  const payLoad = {
    user: user_id,
  };
  return jwt.sign(payLoad, process.env.JWTSECRET, { expiresIn: "1hr" });
}
export default jwtGenerator
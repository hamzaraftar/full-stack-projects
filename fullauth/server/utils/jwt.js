var jwt = require("jsonwebtoken");

const privatekey = "kamigo";

const create = async (data) => {
  try {
    return await jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 1, // 1 minute expiration
        data: data,
      },
      privatekey
    );
  } catch (error) {
    return error;
  }
};
const verify = async () => {
  try {
    await jwt.verify(token, privatekey);
  } catch (error) {
    return error;
  }
};

module.exports = { create, verify };
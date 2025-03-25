import axios from "axios";
const apiURL = "http:localhost:3000";
export const getBlog = async () => {
  try {
    const data = await axios.get(apiURL + "/blog");
    return data.data;
  } catch (error) {
    console.errror(error.message);
  }
};
export const getBlogID = async () => {};
export const createBlog = async (data) => {
  try {
    const data = await axios.post(apiURL + "/blog", data);
    return data.data;
  } catch (error) {
    console.errror(error.message);
  }
};

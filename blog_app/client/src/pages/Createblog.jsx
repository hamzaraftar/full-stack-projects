import { useState } from "react";
import axios from "axios";

function Createblog() {
  const [value, setValur] = useState({
    title: "",
    description: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(value);

    try {
      const postData = await axios.post("http://localhost:5000/blogs", value);
      const data = await postData.data;
      console.log(data);

      if (data) {
        setValur({
          title: "",
          description: "",
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div>
      <form
        className="flex flex-col m-5 min-w-[400px] mx-auto md:w-[600px] sm:w-[500px] "
        onSubmit={handleSubmit}
      >
        <input
          value={value.title}
          onChange={(e) => setValur({ ...value, title: e.target.value })}
          type="text"
          placeholder="Enter title"
          required
          className="outline-none font-medium text-xl border-2 border-blue-500 rounded-md m-2 p-2"
        />
        <input
          value={value.description}
          onChange={(e) => setValur({ ...value, description: e.target.value })}
          type="text"
          placeholder="Enter description"
          required
          className="outline-none font-medium text-xl border-2 border-blue-500 rounded-md m-2 p-2"
        />
        <button className=" sm:w-[300px]  md:w-[400px] sm:mx-auto   bg-gradient-to-r from-sky-500 to-indigo-500 m-2 p-2 rounded-md text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-600 text-lg ">
          Add
        </button>
      </form>
    </div>
  );
}

export default Createblog;

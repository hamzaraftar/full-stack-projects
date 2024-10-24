import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

export default function Home() {
  const [data, setData] = useState([]);
  async function fetchAllToDo() {
    const allblogs = await axios.get("http://localhost:5000/blogs");
    setData(allblogs.data);
  }
  useEffect(() => {
    fetchAllToDo();
  }, [data]);

  async function handleDelete(id) {
    const deleteBlogs = await axios.delete(`http://localhost:5000/blogs/${id}`);
  }

  async function handleSingleBlog(id) {
    const singleBlog = await axios.get(`http://localhost:5000/blogs/${id}`);
    console.log(singleBlog.data[0]);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-12  gap-5 mx-10 mt-10 min-w-80">
      {data.map((item) => (
        <div
          onClick={() => handleSingleBlog(item.id)}
          key={item.id}
          className="bg-slate-100 hover:bg-slate-200 rounded-xl sm:p-3 cursor-pointer px-2 "
        >
          <h2 className="font-semibold text-2xl truncate px-2">{item.title}</h2>
          <p className="font-medium tect mt-4 truncate px-2">
            {item.description}
          </p>
          <MdDelete
            onClick={() => handleDelete(item.id)}
            className="text-3xl  rounded-full hover:bg-red-300 "
          />
        </div>
      ))}
    </div>
  );
}

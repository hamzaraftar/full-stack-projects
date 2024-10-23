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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12  mx-10 mt-10">
      {data.map((item) => (
        <div
          key={item.id}
          className="hover:bg-slate-100 rounded-xl p-2 cursor-pointer px-2 "
        >
          <h2 className="font-semibold text-2xl truncate">{item.title}</h2>
          <p className="font-medium tect mt-4 truncate">{item.description}</p>
          <MdDelete
            onClick={() => handleDelete(item.id)}
            className="text-3xl  rounded-full hover:bg-red-300 "
          />
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";

export default function TodoInput() {
  const [data, setData] = useState({
    title: "",
    content: "",
  });
//   console.log(data);

  return (
    <div className="mt-7" >
      <form className="flex flex-col items-center space-y-4 ">
        <input
          type="text"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          placeholder="Title"
          className="w-64 p-1 text-lg px-2    border-b-4 border-indigo-500  outline-none "
        />
        <input
          type="text"
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
          placeholder="Content"
          className="w-64 p-1  text-lg px-2    border-b-4 border-indigo-500 outline-none "
        />
      </form>
    </div>
  );
}

import { Helmet } from "react-helmet";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function Createblog() {
  const [value, setValue] = useState("");
  const menu = [
    { text: "Nature", path: "/" },
    { text: "Travel", path: "/" },
    { text: "Technology", path: "/" },
    { text: "Politics", path: "/" },
  ];
  return (
    <div className="flex w-full item-center justify-center">
      <Helmet>
        <title>Create Blog</title>
      </Helmet>
      <div className="bg-slate-200 w-[60%]  p-5 rounded-xl">
        <h1 className="text-2xl mb-5">Create Blog Post</h1>
        <div className="flex flex-col">
          <label htmlFor="" className="ml-1 text-gray-500">
            Title
          </label>
          <input
            autoFocus
            autoComplete="off"
            type="text"
            className="h-10  border outline-none border-gray-300 rounded my-2  p-2 "
          />
          <label htmlFor="" className="ml-1 text-gray-500">
            Category
          </label>
          <select className="h-10  border outline-none border-gray-300 rounded my-2  p-2">
            {menu.map((x) => (
              <option key={x.text} value={x.text}>
                {x.text}
              </option>
            ))}
          </select>
          <label htmlFor="" className="ml-1 text-gray-500">
            Image
          </label>
          <input type="file" />
          <label htmlFor="" className="ml-1 text-gray-500">
            Post
          </label>
          <ReactQuill
            className="bg-white rounded mb-2 mt-2"
            theme="snow"
            value={value}
            onChange={setValue}
          />
          <hr />
          <button className="bg-slate-500 text-white h-8  w-[100px] mt-2  rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

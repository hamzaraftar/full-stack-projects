"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Textbox() {
  const [value, setValue] = useState("");
  const [todo, setTods] = useState([]);

  useEffect(() => {
    async function getTods() {
      const data = await axios.get("http://127.0.0.1:8000/api/todos/");
      setTods(data.data);
    }
    getTods();
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = axios({
      method: "post",
      url: "http://127.0.0.1:8000//api/create/",
      data: {
        todo_name: value,
      },
    });

    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter todos"
          className="text-xl p-3  outline-none focus:border-4 border-indigo-500 rounded-xl text-black"
        />
        <input
          type="submit"
          className="mx-3 cursor-pointer bg-indigo-500 text-white text-lg p-3 rounded-xl"
        />
      </form>
      <span className="mt-6">
        {todo.map((item, index) => (
          <h3 className="text-2xl mt-4" key={item.id || index}>
            {item.todo_name}
          </h3>
        ))}
      </span>
    </div>
  );
}

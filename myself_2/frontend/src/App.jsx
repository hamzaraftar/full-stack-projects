import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/todo/");
        setTodo(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todo/${id}/`);
      setTodo(todo.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <div className="bg-gray-200 min-h-screen  pt-4">
        <div className="flex justify-around">
          <h1 className="text-4xl font-bold text-gray ">
            Todo <span className="text-amber-900">App</span>
          </h1>
        </div>
        <div className="todo main  min-h-screen  mx-auto rounded-2xl  mt-3">
          <div className="flex flex-col justify-center items-center gap-4 pt-7">
            <input
              type="text"
              placeholder="Enter Title"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-120 outline-none"
            />
            <input
              type="text"
              placeholder="Enter Content ..."
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-120 outline-none"
            />
            <button className="w-96 bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded cursor-pointer">
              Add Todo
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {todo.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 m-2"
              >
                <h2 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.content}</p>
                <div className="flex justify-between mt-">
                  <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

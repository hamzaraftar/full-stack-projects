import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [note, setNote] = useState([]);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/notes/");
        if (response.status !== 200) {
          throw new Error("Failed to fetch note");
        }

        setNote(response.data);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };

    fetchNote();
  }, []);

  console.log(note);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl text-blue-500 text-center font-bold">Note <span className=" text-blue-600 border-b-4 border-blue-600">App</span></h1>

      <div className="max-w-2xl mx-auto mt-7">
        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            placeholder="Title"
            className="border border-blue-700 rounded-md p-2 mb-2 outline-none font-semibold"
          ></input>
          <input
            type="text"
            placeholder="Content"
            className="border border-blue-700 rounded-md p-2 mb-2  outline-none font-semibold"
          ></input>
          <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-500">
            Add Note
          </button>
        </div>
        {note.map((item) => (
          <div key={item.id} className="p-4 mb-4 bg-white rounded-lg shadow-md">
            <h2 className="text-blue-600 text-2xl font-semibold">
              {item.title}
            </h2>

            <p className="text-gray-700 text-lg mt-2">{item.content}</p>

            <div className="flex gap-2  justify-end">
              <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-500">
                Edit
              </button>

              <button className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-500">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

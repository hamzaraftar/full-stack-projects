import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [note, setNote] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Store the ID of the note we are editing
  const [editingId, setEditingId] = useState(null);

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

  // Delete note
  async function handleDelete(id) {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/notes/${id}/`);

      setNote(note.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  // Edit button is clicked
  function handleEdit(item) {
    setEditingId(item.id);

    // Put existing note data into inputs
    setTitle(item.title);
    setContent(item.content);
  }

  // Add or Update note
  async function handleSubmit() {
    if (!title || !content) {
      return;
    }

    try {
      if (editingId !== null) {
        // UPDATE existing note
        await axios.put(`http://127.0.0.1:8000/api/notes/${editingId}/`, {
          title: title,
          content: content,
        });

        setNote(
          note.map((item) => item.id === editingId ? {...item, title: title,content: content,}:item,),
        );

        // Exit edit mode
        setEditingId(null);
      } else {
        // ADD new note
        const response = await axios.post("http://127.0.0.1:8000/api/notes/", {
          title: title,
          content: content,
        });

        setNote([...note, response.data]);
      }

      // Clear inputs
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error saving note:", error);
    }
  }

  // Cancel editing
  function handleCancel() {
    setEditingId(null);
    setTitle("");
    setContent("");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl text-blue-500 text-center font-bold">
        Note
        <span className="text-blue-600 border-b-4 border-blue-600">App</span>
      </h1>

      <div className="max-w-2xl mx-auto mt-7">
        {/* Input Form */}
        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-blue-700 rounded-md p-2 mb-2 outline-none font-semibold"
          />

          <input
            type="text"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-blue-700 rounded-md p-2 mb-2 outline-none font-semibold"
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            {editingId !== null ? "Update Note" : "Add Note"}
          </button>

          {/* Cancel button only appears while editing */}
          {editingId !== null && (
            <button
              onClick={handleCancel}
              className="bg-gray-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>

        {/* Notes */}
        {note.map((item) => (
          <div key={item.id} className="p-4 mb-4 bg-white rounded-lg shadow-md">
            <h2 className="text-blue-600 text-2xl font-semibold">
              {item.title}
            </h2>

            <p className="text-gray-700 text-lg mt-2">{item.content}</p>

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => handleEdit(item)}
                className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-500"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-500"
              >
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

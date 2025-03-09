import axios from "axios";
import { useEffect, useState } from "react";

export default function Menu() {
  const [notes, setNotes] = useState([]);

  async function fetchNotes() {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/notes/", {
        withCredentials: true,
      });
      setNotes(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div>
      <h1>Well come</h1>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.description}</li>
        ))}
      </ul>
    </div>
  );
}

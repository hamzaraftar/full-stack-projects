import { useState, useEffect } from "react";
import "../App.css";
import TodoForm from "../components/TodoForm";
import Navbar from "../components/Navbar";

import TodoList from "../components/TodoList";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../services/todoService";

// Same fonts as Home.jsx (see the <link> comment there).
const display =
  "font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif]";
const body = "font-['Figtree',ui-sans-serif,system-ui,sans-serif]";

function TodoPage() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodo(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodo(todo.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      return;
    }

    try {
      if (editId !== null) {
        await updateTodo(editId, {
          title: title,
          content: content,
        });

        setTodo(
          todo.map((item) =>
            item.id === editId
              ? { ...item, title: title, content: content }
              : item,
          ),
        );

        setEditId(null);
      } else {
        const data = await createTodo({
          title: title,
          content: content,
        });

        setTodo([...todo, data]);
      }
      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEdit = async (item) => {
    setEditId(item.id);
    setTitle(item.title);
    setContent(item.content);
  };

  const handleCancel = () => {
    setEditId(null);
    setTitle("");
    setContent("");
  };
  return (
    <>
      <Navbar />
      <div className={`${body} min-h-screen bg-[#F2F5FA] pt-10 text-[#17193B]`}>
        <div className="flex justify-center px-4">
          <h1
            className={`${display} text-center text-4xl font-extrabold tracking-tight sm:text-5xl`}
          >
            Todo App
          </h1>
        </div>
        <div className="todo main mx-auto mt-3 w-full max-w-6xl">
          <TodoForm
            title={title}
            content={content}
            editId={editId}
            setTitle={setTitle}
            setContent={setContent}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />

          <TodoList
            todos={todo}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
}

export default TodoPage;
import { useEffect, useState } from "react";
import axios from "axios";

const Alltodo = () => {
  const [value, setValue] = useState([]);
  async function allData() {
    const allTodo = await axios.get("http://localhost:5000/todo");
    const data = await allTodo.data;
    setValue(data);
  }
  console.log(value);

  useEffect(() => {
    allData();
  }, []);
  return (
    <div className="mx-auto w-[400px] p-10">
      <div>
        {value.map((todo) => (
          <div key={todo.id}>
            <h1 className="text-xl text-center font-semibold">{todo.title}</h1>
            <p className="font-serif text-center">{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alltodo;

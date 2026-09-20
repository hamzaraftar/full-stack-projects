import TodoItem from "./TodoItem";

function TodoList({ todos, handleEdit, handleDelete }) {
  return (
    <div className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 items-start gap-2 px-4 pb-16 md:grid-cols-2 lg:grid-cols-3">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
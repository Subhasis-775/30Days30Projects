import Todoitem from "./Todoitem";

const Todolist = ({ todos, deleteTodo, toggleComplete }) => {
  if (todos.length === 0) {
    return <p className="text-gray-500 text-center">No tasks yet</p>;
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todoitem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default Todolist;

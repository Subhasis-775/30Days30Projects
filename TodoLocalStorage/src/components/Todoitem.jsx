const Todoitem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <li className="flex flex-col bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <span
          onClick={() => toggleComplete(todo.id)}
          className={`text-lg font-semibold cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.title}
        </span>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 font-bold text-lg"
        >
          ✕
        </button>
      </div>
      <p
        className={`mt-2 text-sm ${
          todo.completed ? "text-gray-400 italic" : "text-gray-600"
        }`}
      >
        {todo.description}
      </p>
    </li>
  );
};

export default Todoitem;

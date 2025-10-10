import { useEffect, useState } from "react";
import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = ({ title, description }) => {
    if (!title.trim()) return;
    setTodos([...todos, { id: Date.now(), title, description, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">📝 Todo App</h1>

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <Todoform addTodo={addTodo} />
        <hr className="my-4 border-gray-300" />
        <Todolist
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;

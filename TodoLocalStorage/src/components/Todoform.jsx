import { useState } from "react";

const Todoform = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3"
    >
      <input
        type="text"
        value={title}
        placeholder="Enter title..."
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        value={description}
        placeholder="Enter description..."
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 rounded-xl hover:bg-blue-600 transition duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default Todoform;

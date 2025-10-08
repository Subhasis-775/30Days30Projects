// App.js
import React, { useState } from "react";
import Modal from "./components/Modal.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">React Modal Popup Example</h1>
      <p className="mb-6 text-gray-600">Click below to open the modal.</p>

      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-semibold mb-3">Hello 👋</h2>
        <p className="text-gray-600 mb-5">
          This modal can be closed by clicking outside or pressing ESC.  
          Focus is trapped for accessibility.
        </p>
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;

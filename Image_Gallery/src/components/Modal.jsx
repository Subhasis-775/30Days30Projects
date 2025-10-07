const Modal = ({ src, onClose }) => {
  const handleClickOutside = () => onClose();
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
    >
      <div
        onClick={stopPropagation}
        className="bg-slate-800 p-3 rounded-lg shadow-xl max-w-3xl max-h-[80vh]"
      >
        <img
          src={src}
          alt="preview"
          className="rounded-md object-contain max-h-[75vh] w-auto"
        />
        <button
          onClick={onClose}
          className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-1 rounded-md transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

// Modal.js
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  const previousFocus = useRef(null);

  // Focus trap setup
  useEffect(() => {
    if (!isOpen) return;

    previousFocus.current = document.activeElement;
    const modal = modalRef.current;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    if (firstEl) firstEl.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "Tab") {
        if (focusableElements.length === 0) return;

        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [isOpen, onClose]);

  // Overlay click close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        ref={modalRef}
        tabIndex="-1"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 focus:outline-none"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;

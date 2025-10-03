import { useState } from "react";

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
];

const QuoteGenerate = () => {
  const [quote, setQuote] = useState({});

  const handleSubmit = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Random Quote Generator</h1>
      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Generate Quote
      </button>

      {quote.text && (
        <div className="mt-8 p-6 max-w-xl bg-white rounded-xl shadow-lg text-center">
          <p className="text-xl italic text-gray-700 mb-4">"{quote.text}"</p>
          <p className="text-lg font-bold text-gray-900">- {quote.author}</p>
        </div>
      )}
    </div>
  );
};

export default QuoteGenerate;

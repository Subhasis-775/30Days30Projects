import { useState } from "react";
import axios from "axios";

const Userfinder = () => {
  const [Data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://api.github.com/users/Subhasis-775");
      setData(res.data);
    } catch (error) {
      console.error(`Error in fetching the data`);
      setError(error.message);
    } finally {
      setLoading(false);
      setError("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          🔍 GitHub User Finder
        </h1>

        <button
          onClick={() => handleSubmit()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg mb-6 transition-all"
        >
          Fetch User Data
        </button>

        {error && (
          <p className="bg-red-100 text-red-600 py-2 rounded-lg font-medium">
            {error}
          </p>
        )}

        {loading && (
          <p className="text-blue-500 font-semibold animate-pulse">
            Loading...
          </p>
        )}

        {Data && (
          <div className="mt-6 bg-gray-50 rounded-xl shadow-md p-6">
            <img
              src={Data.avatar_url}
              alt="avatar"
              className="w-24 h-24 rounded-full mx-auto mb-4 shadow-sm"
            />
            <p className="text-lg font-semibold text-gray-800">
              Name: {Data.name || "N/A"}
            </p>
            <p className="text-gray-600 mt-2">👥 Followers: {Data.followers}</p>
            <p className="text-gray-600">🫱 Following: {Data.following}</p>
            <a
              href={Data.html_url}
              target="_blank"
              rel="noreferrer"
              className="block mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Userfinder;

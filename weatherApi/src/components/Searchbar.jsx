import axios from "axios";
import { useState } from "react";

const Searchbar = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = async (city) => {
    if (!city) return;
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
          city
        )}?unitGroup=metric&key=AZK4RU7WA45JR29GDEN8DPHZQ&contentType=json`
      );
      setWeather(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Could not fetch weather. Please check the city name.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-100 flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">🌤 Weather App</h1>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          required
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => getWeather(city)}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          Get Weather
        </button>
      </div>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500 font-medium">{error}</p>}

      {weather && (
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
          <h2 className="text-xl font-bold mb-2">{weather.resolvedAddress}</h2>
          <p className="text-4xl font-bold mb-2">
            🌡 {weather.currentConditions.temp}°C
          </p>
          <p className="text-gray-600 mb-1">💧 Humidity: {weather.currentConditions.humidity}%</p>
          <p className="text-gray-600">🌥 {weather.currentConditions.conditions}</p>
        </div>
      )}
    </div>
  );
};

export default Searchbar;

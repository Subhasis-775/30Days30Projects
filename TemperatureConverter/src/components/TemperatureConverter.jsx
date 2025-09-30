import { useState } from "react";

const TemperatureConverter = () => {
  const [celcius, setCelcius] = useState("");
  const [farenhit, setFarenhit] = useState("");

  const convertfromCelcius = (value) => {
    setCelcius(value);
    if (value === "") {
      setFarenhit("");
      return;
    }
    const f = (parseFloat(value) * 9) / 5 + 32;
    setFarenhit(f.toFixed(2));
  };

  const convertfromfarenhit = (value) => {
    setFarenhit(value);
    if (value === "") {
      setCelcius("");
      return;
    }
    const c = ((parseFloat(value) - 32) * 5) / 9;
    setCelcius(c.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl text-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        🌡️ Temperature Converter
      </h2>

      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700">
          Celsius (°C)
        </label>
        <input
          type="number"
          value={celcius}
          placeholder="Enter °C"
          onChange={(e) => convertfromCelcius(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">
          Fahrenheit (°F)
        </label>
        <input
          type="number"
          value={farenhit}
          placeholder="Enter °F"
          onChange={(e) => convertfromfarenhit(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};
export default TemperatureConverter;
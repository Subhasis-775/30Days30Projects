import { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    setError(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="relative mb-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`peer w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                error.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder=" "
            />
            <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-xs">
              Name
            </label>
            {error.name && <p className="text-red-500 text-xs mt-1">{error.name}</p>}
          </div>

          <div className="relative mb-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`peer w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                error.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder=" "
            />
            <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-xs">
              Email
            </label>
            {error.email && <p className="text-red-500 text-xs mt-1">{error.email}</p>}
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`peer w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                error.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder=" "
            />
            <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-xs">
              Password
            </label>
            {error.password && <p className="text-red-500 text-xs mt-1">{error.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account? <a href="#" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default FormValidation;

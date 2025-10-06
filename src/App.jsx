import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Counter App
        </h1>

        <div className="text-6xl font-bold text-center mb-8">
          <span
            className={`${
              count > 0
                ? "text-green-600"
                : count < 0
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {count}
          </span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleDecrement}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer"
          >
            Decrement
          </button>
          <button
            onClick={handleReset}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer"
          >
            Reset
          </button>
          <button
            onClick={handleIncrement}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

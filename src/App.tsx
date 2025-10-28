import { useState } from 'react'
import './App.css'

const App = () => {
  const [secretNumber] = useState<number>(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleGuess = () => {
    const numGuess = Number(guess);

    if (isNaN(numGuess)) {
      setMessage("⚠️ Please enter a valid number!");
      return;
    }

    if (numGuess === secretNumber) {
      setMessage("🎉 Correct! You guessed the number!");
    } else if (numGuess > secretNumber) {
      setMessage("📉 Too high! Try again.");
    } else {
      setMessage("📈 Too low! Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Number Guesser</h1>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="border border-gray-300 p-2 rounded w-40 text-center mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter a number"
      />

      <button
        onClick={handleGuess}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Guess
      </button>

      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
};

export default App;
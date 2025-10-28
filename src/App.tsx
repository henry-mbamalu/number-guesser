import { useState } from 'react'
import { motion } from "framer-motion";
import './App.css'

const App = () => {
  const difficultySettings = { easy: 15, medium: 10, hard: 5 } as const;
  type Difficulty = keyof typeof difficultySettings;

  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [attemptsLeft, setAttemptsLeft] = useState<number>(difficultySettings[difficulty]);

  const [secretNumber] = useState<number>(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [gameOver, setGameOver] = useState<boolean>(false);

  const handleDifficultyChange = (level: Difficulty) => {
    setDifficulty(level);
    setAttemptsLeft(difficultySettings[level]);
    setMessage("");
    setGameOver(false);
  };

  const handleGuess = () => {
    if (gameOver) return;
    const numGuess = Number(guess);

    if (!numGuess || numGuess < 1 || numGuess > 100) {
      setMessage("❌ Please enter a number between 1 and 100!");
      return;
    }

    setAttemptsLeft((prev) => prev - 1);

    if (numGuess === secretNumber) {
      setMessage("🎉 Correct! You won!");
      setGameOver(true);
    } else if (attemptsLeft <= 1) {
      setMessage(`💀 Game over! The number was ${secretNumber}.`);
      setGameOver(true);
    } else if (numGuess > secretNumber) {
      setMessage("📉 Too high!");
    } else {
      setMessage("📈 Too low!");
    }

    setGuess("");
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Number Guesser</h1>

      <div className="flex gap-2 mb-4">
        {(["easy", "medium", "hard"] as Difficulty[]).map((level) => (
          <button
            key={level}
            onClick={() => handleDifficultyChange(level)}
            className={`px-3 py-1 rounded capitalize ${difficulty === level ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {level}
          </button>
        ))}
      </div>


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

      <p className="mt-2 text-sm text-gray-600">Attempts left: {attemptsLeft}</p>

      <motion.p
        key={message}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-4 text-lg font-medium"
      >
        {message}
      </motion.p>


      {gameOver && (
        <button
          onClick={handleRestart}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default App;
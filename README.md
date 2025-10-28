# 🎯 Number Guesser Game

A fun and interactive number guessing game built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.  
The game randomly selects a secret number between **1 and 100**, and the player has a limited number of attempts to guess it.

---

## 🧩 Features

- 🎲 **Random number generation** between 1 and 100  
- 🧑‍💻 **Player input** through a user-friendly interface  
- 💬 **Feedback system**: tells you if your guess is too high, too low, or correct  
- ⏳ **Limited attempts** per game round (based on difficulty)  
- 🏆 **Win/Loss detection** with remaining attempts displayed  
- 🔁 **Restart button** to start a new round without page reload  
- ⚙️ **Difficulty levels** (Easy, Medium, Hard) that adjust guess limits  
- ✨ **Smooth animations** for messages and transitions using Framer Motion  
- 🛡️ **Input validation** to prevent invalid guesses  

---

## 🧱 Tech Stack

| Tool | Purpose |
|------|----------|
| **React + TypeScript** | Component-based UI and type safety |
| **Tailwind CSS** | Rapid styling and responsive design |
| **Framer Motion** | Smooth and modern animations |
| **Vite** | Fast development build tool |

---

## 🚀 Getting Started

Follow these steps to run the game locally.

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/henry-mbamalu/number-guesser.git
cd number-guesser


### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Visit the game at:

```
http://localhost:5173
```

---

## How to Play

1. Select a **difficulty level** — Easy, Medium, or Hard.

   * Easy → 15 attempts
   * Medium → 10 attempts
   * Hard → 5 attempts

2. Enter a number between **1 and 100** and click **Guess**.

3. You’ll receive feedback:

   * 📈 *Too low!* → Try a higher number.
   * 📉 *Too high!* → Try a lower number.
   * 🎉 *Correct!* → You guessed the secret number.

4. When attempts run out, the game ends with a message showing the correct number.

5. Click **Restart Game** to play again.

---

## 🧠 Example Gameplay

```
Welcome to Number Guesser!
Difficulty: Medium
Attempts left: 10

Your guess: 45
📉 Too high! Try again.
Attempts left: 9

Your guess: 23
📈 Too low! Try again.
Attempts left: 8

Your guess: 35
🎉 Correct! You guessed the number!
```

---

## 🌿 Git Workflow (Feature Branching)

Each feature was developed on a separate branch to maintain clean version control.

| Feature            | Branch                     | Commit Message                                                |
| ------------------ | -------------------------- | ------------------------------------------------------------- |
| Random number + UI | `feature/random-number`    | `feat: generate random number and basic guessing UI`          |
| Attempt limit      | `feature/attempt-limiter`  | `feat: add attempt limit and display remaining guesses`       |
| Restart game       | `feature/restart-game`     | `feat: add restart button and functionality`                  |
| Difficulty levels  | `feature/difficulty-level` | `feat: add difficulty levels with different attempt limits`   |
| Animations         | `feature/animations`       | `feat: enhance user experience with Framer Motion animations` |

After completing each feature:

```bash
git checkout main
git merge feature/<branch-name>
```

---

## 🧰 Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start development server     |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |

---

## 🧑‍💻 Code Quality

* Written in **TypeScript** for better reliability.
* Includes **input validation** and **error handling**.
* Uses **functional React hooks** (`useState`).
* Clean and modular structure ready for expansion.

---

## 🪄 Optional Enhancements (Ideas)

* ⏱️ Add a countdown timer per round
* 📊 Track player stats across rounds
* 🏅 Maintain a local leaderboard
* 🔈 Add sound effects for correct/wrong guesses

---

import React, { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";

function App() {
  let [row, setRow] = useState(0);
  let [col, setCol] = useState(0);
  let [guesses, setGuesses] = useState(
    Array(6)
      .fill(" ")
      .map(() => new Array(5).fill(" "))
  );

  const updateGuesses = (guess) => {
    if (col < 5) {
      guesses[row][col] = guess;
      setGuesses(guesses);
      setCol(col + 1);
    }
  };
  const deleteLetter = () => {
    if (col > 0) {
      guesses[row][col - 1] = " ";
      setCol(col - 1);
    }
  };
  const nextGuess = () => {
    if (col < 4) {
      alert("keep guessing");
      return;
    }
    alert("nope");
    setRow(row + 1);
    setCol(0);
  };

  return (
    <div className="App">
      <header className="App-header">WRDLE</header>
      <Grid guesses={guesses} row={row} col={col} />
      <Keyboard
        guessLetter={updateGuesses}
        deleteLetter={deleteLetter}
        nextGuess={nextGuess}
      />
    </div>
  );
}

export default App;

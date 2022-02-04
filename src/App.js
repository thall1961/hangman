import React, {useState} from "react";
import "./App.css";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import words from "./data/words";

function App() {
    let [gameOver, setGameOver] = useState(false);
    let [row, setRow] = useState(0);
    let [col, setCol] = useState(0);
    let [guesses, setGuesses] = useState(
        Array(6)
            .fill(" ")
            .map(() => new Array(5).fill(" "))
    );
    const answer = "simba";

    const updateGuesses = (guess) => {
        if (col < 5) {
            guesses[row][col] = guess;
            setGuesses(guesses);
            setCol(col + 1);
        }
    };

    const deleteLetter = () => {
        if (col > 0 && !gameOver) {
            guesses[row][col - 1] = " ";
            setCol(col - 1);
        }
    };

    const nextGuess = () => {
        if (col < 5) {
            alert("keep guessing");
            return;
        }
        const guessStr = guesses[row].reduce((prev, cur) => prev.concat(cur), []).join("");
        if (!words.includes(guessStr)) {
            alert("That word is not in our word bank.");
            return;
        }
        if (guessStr === answer) {
            alert("You did it!");
            setGameOver(true);
            return;
        }
        setRow(row + 1);
        setCol(0);
    };

    return (
        <div className="App">
            <header className="App-header">
                💫 MOUSE-LE 🐭
            </header>
            <Grid guesses={guesses} row={row} col={col} answer={answer}/>
            <Keyboard
                guesses={guesses}
                answer={answer}
                guessLetter={updateGuesses}
                deleteLetter={deleteLetter}
                nextGuess={nextGuess}
            />
        </div>
    );
}

export default App;

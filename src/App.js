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
    const answer = "ariel";

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
        if (gameOver) {
            return;
        }
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
            setRow(row + 1);
            return;
        }
        setRow(row + 1);
        setCol(0);

        setTimeout(() => {
            if (row === 6) {
                alert('Better luck next time...🥲');
                setGameOver(true);
            }
        }, 1000);
    };

    return (
        <div className="App">
            <header className="App-header">
                MOM&lsquo;S GAME
            </header>
            <small>*Hint - <span className="na">W</span><span className="yes">O</span><span className="close">O</span><span>D</span><span className="yes">Y</span> - there may or may not actually be 2 Os</small>
            <Grid guesses={guesses} row={row} col={col} answer={answer}/>
            <Keyboard
                guesses={guesses}
                answer={answer}
                guessLetter={updateGuesses}
                deleteLetter={deleteLetter}
                nextGuess={nextGuess}
                row={row}
            />
        </div>
    );
}

export default App;

import React, {useState} from "react";
import "./App.css";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";

function App() {
    let [gameOver, setGameOver] = useState(false);
    let [guesses, setGuesses] = useState('');
    let [tries, setTries] = useState(0);
    const answer = "ariel";

    const updateGuesses = (guess) => {
        guesses += guess;
        setGuesses(guesses);
        checkGuess();
        setTries(tries + 1);
    };

    const checkGuess = () => {
        if (gameOver) {
            return;
        }
        if (guesses === answer) {
            alert("You did it!");
            setGameOver(true);
            return;
        }
        setTimeout(() => {
            if (tries === 10) {
                alert('Better luck next time...🥲');
                setGameOver(true);
            }
        }, 1000);
    };

    return (
        <div className="App">
            <header className="App-header">
                HANGMAN
            </header>
            <Grid guesses={guesses} answer={answer}/>
            <Keyboard
                guesses={guesses}
                answer={answer}
                guessLetter={updateGuesses}
            />
            <div className="wrong-letters">{guesses.split('').filter(g => !answer.includes(g)).map(g => <span key={Math.random().toString()}>{g}</span>)}</div>
        </div>
    );
}

export default App;

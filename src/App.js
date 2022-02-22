import React, { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
// import man from './assets/man.jpeg';
import man from "./assets/man2.png";
// import lava from './assets/lava.gif';
import fire from "./assets/fire.gif";

const words = [
  "amaze",
  "energy",
  "amusing",
  "enormous",
  "noticed",
  "analyze",
  "escape",
  "observed",
  "annoy",
  "estimate",
  "opinion",
  "arranged",
  "exercise",
  "peeking",
  "avoid",
  "expect",
  "plan",
  "cause",
  "famous",
  "poke",
  "classify",
  "flock",
  "predict",
  "community",
  "friendly",
  "prefer",
  "conclusion",
  "frighten",
  "process",
  "connection",
  "frown",
  "publish",
  "continue",
  "gasp",
  "records",
  "cooperation",
  "gather",
  "revise",
  "curious",
  "gust",
  "separate",
  "cycle",
  "helpful",
  "steaming",
  "data",
  "include",
  "shivered",
  "describe",
  "insist",
  "similar",
  "detail",
  "investigate",
  "sum",
  "diagram",
  "label",
  "suppose",
  "difference",
  "leaned",
  "sway",
  "different",
  "living",
  "stormy",
  "discover",
  "march",
  "swoop",
  "drowsy",
  "matter",
  "treasure",
  "edit",
  "moist",
  "vanish",
  "effect",
  "necessary",
  "volunteer",
];
const randomNumber = Math.floor(Math.random() * 71);
const answer = words[randomNumber];

function App() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  console.log("answer", answer);
  const [gameOver, setGameOver] = useState(false);
  let [guesses, setGuesses] = useState(() => "");
  const [tries, setTries] = useState(0);
  const [misses, setMisses] = useState(0);
  const [top, setTop] = useState(0);

  // const [answer, setAnswer] = useState(words[randomNumber]);
  // const answerRef = React.createRef();
  // const [angle, setAngle] = useState(0);
  // const answer = 'trampoline';

  const handleKeyDown = (event) => {
    if (alphabet.includes(event.key)) {
      updateGuesses(event.key);
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  const updateGuesses = (guess) => {
    if (gameOver) {
      return;
    }
    setGuesses((guesses += guess));
    checkGuess();
    setTries(tries + 1);
    if (!answer.includes(guess)) {
      setMisses(misses + 1);
      setTop(top + 10);
    }
  };

  // const updatingAnswer = () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  // }

  const reset = () => {
    setTries(0);
    setGuesses("");
    setMisses(0);
  };

  const checkGuess = () => {
    if (gameOver) {
      return;
    }
    if (processWord(guesses) === processWord(answer)) {
      alert("You did it!");
      setGameOver(true);
      return;
    }
    // if (misses === 6) {
    //     console.log('Better luck next time...🥲');
    //     setGameOver(true);
    //     // dance();
    //     return;
    // }
  };

  // const updateAnswer = () => {
  //     setAnswer(answerRef.current.value);
  //     document.addEventListener('keydown', handleKeyDown);
  // }

  const processWord = (word) => {
    // take out duplicate letters, sort, make string
    return [...new Set(word.split(""))]
      .filter((l) => answer.includes(l))
      .sort((a, b) => a - b)
      .join("");
  };

  // const dance = () => {
  //     setAngle(45);
  //     setInterval(() => {
  //         setAngle(angle * -1);
  //     });
  // }

  return (
    <div className="App">
      <header className="App-header">BURN MAN</header>
      <div className="row">
        <Keyboard
          guesses={guesses}
          answer={answer}
          guessLetter={updateGuesses}
          className="col-12 order-first order-md-last"
        />
        <div className="row mb-5 pb-5 col-12 order-last order-md-first">
          <div className="col-md-6">
            <Grid guesses={guesses} answer={answer} />
            <div className="wrong-letters p-2 rounded">
              <h3 className="text-danger">WRONG LETTERS</h3>
              {guesses
                .split("")
                .filter((g) => !answer.includes(g))
                .map((g) => (
                  <span key={Math.random().toString()}>{g}</span>
                ))}
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <img src={man} height="200" style={{ marginTop: top }} />
            <img
              src={fire}
              style={{
                width: "200px",
                position: "absolute",
                top: "200px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>
      </div>

      <button className="reset-button shadow rounded" onClick={reset}>
        RESET
      </button>
      {/*<button onClick={updatingAnswer}>Update Answer</button>*/}
      {/*<div className="form-group">*/}
      {/*    <input type="text" ref={answerRef} className="form-control" />*/}
      {/*    <button className="btn btn-outline-info" onClick={updateAnswer}>Update Answer</button>*/}
      {/*</div>*/}
    </div>
  );
}

export default App;

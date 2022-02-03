import React, {useState} from 'react';
import './App.css';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';

function App() {
  let [row, setRow] = useState(0);
  let [col, setCol] = useState(0);
  let [guess, setGuess] = useState('');

  const updateRow = () => setRow(row + 1);
  const updateCol = () => setCol(col + 1);
  const updateGuess = guess => setGuess(guess);

  return (
    <div className="App">
      <header className="App-header">
        WRDLE
      </header>
      <Grid activeRow={row} activeCol={col} guess={guess} />
      <Keyboard updateRow={updateRow} updateCol={updateCol} updateGuess={updateGuess} />
    </div>
  );
}

export default App;

import React from "react";
import Letter from "./Letter";
import styled from "styled-components";
import PropTypes from "prop-types";

const KeyboardWrapper = styled.div`
  margin: 0 auto;
  background: #f6f3f1;
  padding: 20px;
`;

function Keyboard(props) {
  const layout = ["qwertyuiop", "asdfghjkl", "✅zxcvbnm⬅"];
  return (
    <KeyboardWrapper className="shadow rounded mt-5">
      {layout.map((letterRow, index) => (
        <div
          key={index}
          className="d-flex col-6 mx-auto justify-content-center my-1"
        >
          {letterRow.split("").map((l, index) => (
            <Letter
              key={index}
              letter={l}
              guessLetter={props.guessLetter}
              deleteLetter={props.deleteLetter}
              nextGuess={props.nextGuess}
            />
          ))}
        </div>
      ))}
    </KeyboardWrapper>
  );
}

Keyboard.propTypes = {
  guessLetter: PropTypes.func.isRequired,
  deleteLetter: PropTypes.func.isRequired,
  nextGuess: PropTypes.func.isRequired,
};

export default Keyboard;

import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Ltr = styled.div`
  width: 35px !important;
  height: 35px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
  }
`;

function Letter(props) {
  let [pressed, setPressed] = useState(false);

  const keyPress = () => {
    setPressed(!pressed);
  };

  const mouseLeft = () => {
    setPressed(false);
  };

  const handleClick = () => {
    if (props.letter === "❌") {
      props.deleteLetter();
    } else if (props.letter === "✅") {
      props.nextGuess();
    } else {
      props.guessLetter(props.letter);
    }
  };

  return (
    <div className="text-center mx-1 border rounded shadow p-1 bg-white no-highlight">
      <Ltr
        className={`mb-0 no-hightlight ${pressed ? "pressed" : ""}`}
        onMouseLeave={() => mouseLeft()}
        onClick={() => handleClick()}
        onMouseDown={() => keyPress()}
        onMouseUp={() => keyPress()}
      >
        {props.letter.toUpperCase()}
      </Ltr>
    </div>
  );
}

Letter.propTypes = {
  letter: PropTypes.string,
  guessLetter: PropTypes.func,
  deleteLetter: PropTypes.func,
  nextGuess: PropTypes.func,
};

export default Letter;

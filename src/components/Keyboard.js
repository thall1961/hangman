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
    const layout = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    const letterStatus = letter => {
        // the letter has been guessed, but it's not in the answer
        if (!props.answer.includes(letter) && props.guesses.includes(letter)) {
            return 'no';
        }
        if (props.answer.includes(letter) && props.guesses.includes(letter)) {
            return 'yes';
        }
    }

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
                            status={letterStatus(l)}
                        />
                    ))}
                </div>
            ))}
        </KeyboardWrapper>
    );
}

Keyboard.propTypes = {
    guessLetter: PropTypes.func.isRequired,
    guesses: PropTypes.any,
    answer: PropTypes.string
};

export default Keyboard;

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

    const letterStatus = letter => {
        const row = props.guesses.findIndex(g => g.includes(letter));
        console.log('row', row, 'no', !props.answer.includes(letter));
        // no rows have the letter(i.e. the letter hasn't been guessed)
        if (row < 0 || row === props.row) {
            return 'na';
        }
        // the letter has been guessed, but it's not in the answer
        if (!props.answer.includes(letter)) {
            return 'no';
        }
        const col = props.guesses[row].findIndex(g => g === letter);
        if (props.answer[col] === letter) {
            return 'yes';
        } else {
            return 'close';
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
                            deleteLetter={props.deleteLetter}
                            nextGuess={props.nextGuess}
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
    deleteLetter: PropTypes.func.isRequired,
    nextGuess: PropTypes.func.isRequired,
    guesses: PropTypes.any,
    answer: PropTypes.string,
    row: PropTypes.number
};

export default Keyboard;

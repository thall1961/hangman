import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Guess = styled.div`
  text-transform: uppercase;
  width: 50px;
  font-size: 2rem;
  text-align: center;
`;

function Grid(props) {
    return (
        <div className="mx-auto mt-5">
            {props.guesses.map((guess, r) => (
                <div
                    key={Math.random().toString()}
                    className="d-flex justify-content-center align-items-center guess-row"
                >
                    {guess.map((g, c) => (
                        <Guess key={Math.random().toString()} className="p-1 bg-light">
                            <div
                                className={`bg-white
                  ${r === props.row && c === props.col ? " active " : ""}
                  ${r < props.row && props.answer[c] === g ? " correct " : ""}
                  ${
                                    r < props.row &&
                                    props.answer.includes(g) &&
                                    props.answer[c] !== g
                                        ? " close "
                                        : ""
                                }
                  `}
                            >
                                {g}
                            </div>
                        </Guess>
                    ))}
                </div>
            ))}
        </div>
    );
}

Grid.propTypes = {
    guesses: PropTypes.any.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    answer: PropTypes.string.isRequired,
};

export default Grid;

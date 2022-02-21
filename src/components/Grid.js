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
            <div className="d-flex justify-content-center align-items-center guess-row">
                {props.answer.split('').map(letter => (
                    <Guess key={Math.random().toString()} className="p-1 border border-dark mx-1">
                        <div className={`bg-white ${props.guesses.includes(letter) ? " d-block" : " d-none "}`}>
                            {letter}
                        </div>
                    </Guess>
                ))}
            </div>
        </div>
    );
}

Grid.propTypes = {
    guesses: PropTypes.any.isRequired,
    answer: PropTypes.string.isRequired,
};

export default Grid;

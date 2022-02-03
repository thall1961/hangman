import React from 'react';
import Letter from './Letter';
import PropTypes from 'prop-types';

function LetterRow(props) {

  const update = (index, letter) => {
    props.updateGuess(letter);
    if (index + 1 === props.letterRow.split('').length) {
      props.updateRow();
    } else {
      props.updateCol();
    }
  }

  return (
    <div className="d-flex col-6 mx-auto justify-content-center my-1">
      {props.letterRow.split('').map((l, index) => <Letter key={index} letter={l} onClick={update(index, l)} />)}
    </div>
  );
}

LetterRow.propTypes = {
  letterRow: PropTypes.string.isRequired,
  updateRow: PropTypes.func,
  updateCol: PropTypes.func,
  updateGuess: PropTypes.func
}

export default LetterRow;
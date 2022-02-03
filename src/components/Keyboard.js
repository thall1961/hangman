import React from 'react';
import LetterRow from './LetterRow';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const KeyboardWrapper = styled.div`
  margin: 0 auto;
  background: #f6f3f1;
  padding: 20px;
`;

function Keyboard(props) {
  const layout = ['qwertyuiop', 'asdfghjkl', '✅zxcvbnm❌'];
  return (
    <KeyboardWrapper className="shadow rounded mt-5">
      {layout.map((a, index) => <LetterRow key={index} letterRow={a} updateRow={props.updateRow} updateCol={props.updateCol} updateGuess={props.updateGuess} />)}
    </KeyboardWrapper>
  )
}

Keyboard.propTypes = {
  updateRow: PropTypes.func,
  updateCol: PropTypes.func,
  updateGuess: PropTypes.func
}

export default Keyboard;
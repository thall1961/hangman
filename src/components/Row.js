import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  text-transform: uppercase;
  width: 50px;
  font-size: 2rem;
  text-align: center;
`;

function Row(props) {
  const keys = [0,0,0,0,0,0].map(() => (Math.random() + 1).toString(36).substring(7));
  return (
    <div className="d-flex justify-content-center align-items-center guess-row">
      {keys.map((x, index) => (
        <div key={x} className="p-1 bg-light">
          <Input
            type="text"
            minLength="1"
            maxLength="1"
            pattern="[A-Za-z]"
            readonly={true}
            disabled={true}
            value={index === props.activeCol ? props.guess : ''}
          />
        </div>
      ))}
    </div>
  );
}

Row.propTypes = {
  activeRow: PropTypes.boolean,
  activeCol: PropTypes.number,
  guess: PropTypes.string
}

export default Row;
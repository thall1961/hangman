import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  text-transform: uppercase;
  width: 50px;
  font-size: 3rem;
  text-align: center;
`;

function Row() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="p-1 bg-light">
        <Input type="text" minLength="1" maxLength="1" pattern="[A-Za-z]" />
      </div>
      <div className="p-1 bg-light">
        <Input type="text" minLength="1" maxLength="1" pattern="[A-Za-z]" />
      </div>
      <div className="p-1 bg-light">
        <Input type="text" minLength="1" maxLength="1" pattern="[A-Za-z]" />
      </div>
      <div className="p-1 bg-light">
        <Input type="text" minLength="1" maxLength="1" pattern="[A-Za-z]" />
      </div>
      <div className="p-1 bg-light">
        <Input type="text" minLength="1" maxLength="1" pattern="[A-Za-z]" />
      </div>
    </div>
  );
}

export default Row;
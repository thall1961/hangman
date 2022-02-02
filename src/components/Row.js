import React from 'react';

export default () => {
  return (
    <div className="row">
      <div className="col-2 p-5 bg-light mx-1">
        <input type="text" minLength="1" maxLength="1" pattern="[A-Za-z]" style={{textTransform: 'uppercase', width: '50px', fontSize: '3rem'}} />
      </div>
      <div className="col-2 p-5 bg-light">
        <input type="text" minLength="1" maxLength="1" pattern="[A-Za-z]" style={{textTransform: 'uppercase', width: '50px', fontSize: '3rem'}} />
      </div>
      <div className="col-2 p-5 bg-light">
        <input type="text" minLength="1" maxLength="1" pattern="[A-Za-z]" style={{textTransform: 'uppercase', width: '50px', fontSize: '3rem'}} />
      </div>
      <div className="col-2 p-5 bg-light">
        <input type="text" minLength="1" maxLength="1" pattern="[A-Za-z]" style={{textTransform: 'uppercase', width: '50px', fontSize: '3rem'}} />
      </div>
      <div className="col-2 p-5 bg-light">
        <input type="text" minLength="1" maxLength="1" pattern="[A-Za-z]" style={{textTransform: 'uppercase', width: '50px', fontSize: '3rem'}} />
      </div>
    </div>
  );
}
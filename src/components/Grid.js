import React from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

function Grid(props) {
  console.log('props', props);
  return (
    <div className="mx-auto mt-5">
      <Row id="1" activeRow={props.activeRow === 0} activeCol={props.activeCol} guess={props.guess} />
      <Row id="2" activeRow={props.activeRow === 1} activeCol={props.activeCol} guess={props.guess} />
      <Row id="3" activeRow={props.activeRow === 2} activeCol={props.activeCol} guess={props.guess} />
      <Row id="4" activeRow={props.activeRow === 3} activeCol={props.activeCol} guess={props.guess} />
      <Row id="5" activeRow={props.activeRow === 4} activeCol={props.activeCol} guess={props.guess} />
    </div>
  );
}

Grid.propTypes = {
  activeRow: PropTypes.number,
  activeCol: PropTypes.number,
  guess: PropTypes.string
}

export default Grid;
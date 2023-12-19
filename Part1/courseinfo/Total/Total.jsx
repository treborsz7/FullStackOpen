import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Total.styles';

const Total = (props) => {
  return (
    <div className="TotalWrapper">
      Total:{props.total}
    </div>
  );
}

export default Total;

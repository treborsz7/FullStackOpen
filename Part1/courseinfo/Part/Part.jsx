import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Part.styles';

const Part = (props) => {
  console.log(props);
  return (
    <div className="PartWrapper">
      {props.part.name}
    </div>
  );

}

export default Part;

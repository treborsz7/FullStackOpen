import React from 'react'
import PropTypes from 'prop-types';
import Part from "../Part/Part"
//import { Test } from './Content.styles';

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
}

export default Content;

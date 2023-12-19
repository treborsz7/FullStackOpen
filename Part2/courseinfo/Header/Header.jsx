import React from 'react';
//import { Test } from './Header.styles';

const Header = (props) => {

  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}



export default Header;

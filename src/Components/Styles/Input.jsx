import React from "react";
import styled from "styled-components";

const Input = styled.input`
height: 24px;
width: 320px;
padding: 10px 5px;
margin: auto;
margin-bottom: 20px;
border: 1px solid;
border-color: white;
background-color: transparent;
color: white;
border-radius: 2px;
font-size: 16px;
&:hover,
&:focus {
  outline: none;
}
`

function StyledInput(props) {
  return <Input {...props}/>
}

export default StyledInput;
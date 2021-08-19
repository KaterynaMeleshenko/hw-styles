import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import StyledTopBlock from './Styles/MainBlock';
import StyledTitle from './Styles/Title';
import StyledFlex from './Styles/FlexBox';
import StyledInput from './Styles/Input';
import StyledInputCheck from './Styles/InputCheck';
import StyledBoxTitle from './Styles/BoxTitle';
import StyledFlexLink from './Styles/FlexLink';
import StyledButton from './Styles/Button';
import StyledCopyright from './Styles/Copyright';

const inlineStyle = {
  backgroundColor: "black",
  width: "400px",
  height: "523px",
  padding: "20px",
  margin: "auto",
}

const contendend = {
  justifyContent: "flex-end",
  width: "332px",
}

const inputWidth = {
  width: "140px",
}

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spam, setSpam] = useState(false);  
  
  

  return (
    <div style={inlineStyle}>
    <StyledTopBlock/>
    <StyledTitle>
      Sign up
    </StyledTitle>
  
    <StyledFlexLink>
      <StyledInput type="name" placeholder="First Name *" style={inputWidth} onChange={setFirstname}/>
      <StyledInput type="name" placeholder="Last Name *" style={inputWidth} onChange={setLastname}/>
    </StyledFlexLink>  

    <StyledFlex>
      <StyledInput type="e-mail" placeholder="Email Address *" onChange={setEmail}/>
      <StyledInput type="password" placeholder="Password *" onChange={setPassword}/>
    </StyledFlex>  
    <StyledFlexLink>
    <StyledInputCheck type="checkbox" value="Spam" onChange={setSpam}/>
    <StyledBoxTitle>
        I want to receive inspiration, 
        marketing promotions and updates via email.
    </StyledBoxTitle>
    </StyledFlexLink>
  
    <StyledButton>SIGN UP</StyledButton>
    <StyledFlexLink style={contendend}>
      <Link to="/signin">
      Already have an account? Sign In
      </Link>
    </StyledFlexLink>
    <StyledCopyright>
      Copyright © Your Website 2021.
    </StyledCopyright>
  </div>
  )
}

export default SignUp;
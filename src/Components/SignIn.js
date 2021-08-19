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
  height: "445px",
  padding: "20px",
  margin: "auto",
}

const linksWidth = {
    width: "332px",
}


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);  
  
  return (
    <div style={inlineStyle}>
      <StyledTopBlock/>
      <StyledTitle>
        Sign in
      </StyledTitle>
    
      <StyledFlex>
        <StyledInput type="e-mail" placeholder="Email Address *" onChange={setEmail} />
        <StyledInput type="password" placeholder="Password *" onChange={setPassword}/>
      </StyledFlex> 
      <StyledFlexLink>
        <StyledInputCheck type="checkbox" value="Remember me"onChange={setRemember} />
        <StyledBoxTitle>Remember me</StyledBoxTitle>
      </StyledFlexLink> 

      <StyledButton>SIGN IN</StyledButton>
      <StyledFlexLink style={linksWidth}>
        <Link to="/remindpassword">
          Forgot password?
        </Link>
        <Link to="/signup">
          Don't have an account? Sign Up
        </Link>
      </StyledFlexLink>
      <StyledCopyright>
        Copyright © Your Website 2021.
      </StyledCopyright>
    </div>
  )
}

export default SignIn;
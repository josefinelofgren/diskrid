import React, { useState } from 'react';
import { Navbar, Row, Col, Container } from 'react-bootstrap';
import { FiShoppingBag, FiUser } from "react-icons/fi";
import LogInDropDown from './user/LoginDropDown';
import SignUpDropDown from './user/SignUpDropDown';

interface Props {
  user: any
}

function Nav(props: Props) {

  const { user } = props;

  // state and toggle for user dropdown
  const[userDropDown, setUserDropDown] = useState(false);
  const toggleUserDropDown = () => {
    setUserDropDown(!userDropDown);
    setLogInContent(true);
    setSignUpContent(false);
  }

  //state and toggle for login and signup content in user dropdown
  const[logInContent, setLogInContent] = useState(false);
  const toggleLogInContent = () => {
    setLogInContent(true);
    setSignUpContent(false);
  }

  const[signUpContent, setSignUpContent] = useState(false);
  const toggleSignUpContent = () => {
    setSignUpContent(true);
    setLogInContent(false)
  }

  return (
    <>
    <Navbar>
      <Container fluid>
        <div>
          Kom igång
        </div>
        <Navbar.Brand>
          Diskrid
        </Navbar.Brand>
        <div className='navbar-icons'>
          <span>
            <FiUser
            onClick={toggleUserDropDown}/>
          </span>
          <span>
            <FiShoppingBag/>
          </span>
        </div>
      </Container>
    </Navbar>
    <div className='subnav'>
      <Container fluid>
        <div className='subnav-grid'>
            <li><a href="">Kom igång</a></li>
            <li><a href="">Så funkar det</a></li>
            <li><a href="">Produkter</a></li>
            <li><a href="">FAQ & hjälp</a></li>
            <li><a href="">Om oss</a></li>
        </div>
      </Container>
    </div>
    <div className={userDropDown ? 'user-dropdown is-active' : 'user-dropdown'}>
      <div className='close-btn' onClick={toggleUserDropDown}/>
        {logInContent && (
          <LogInDropDown toggleSignUpContent={toggleSignUpContent}/> 
        )}
        {signUpContent && (
          <SignUpDropDown toggleLogInContent={toggleLogInContent}/> 
        )}
    </div>
    </>
  );
}

export default Nav;

import React, { useState } from 'react';
import { Navbar, Row, Col, Container } from 'react-bootstrap';
import { FiShoppingBag, FiUser } from "react-icons/fi";
import LogInDropDown from './user/LoginDropDown';
import LogOutDropDown from './user/LogoutDropDown';
import SignUpDropDown from './user/SignUpDropDown';
import ShoppingCart from './user/ShoppingCart';
import { Link } from 'react-scroll';

interface Props {
  user: any
}

function Nav(props: Props) {

  const style = {
    'cursor': 'pointer'
  }

  const { user } = props;

  // state and toggle for user dropdown
  const[userDropDown, setUserDropDown] = useState(false);
  const toggleUserDropDown = () => {
    setUserDropDown(!userDropDown);
    setLogInContent(true);
    setSignUpContent(false);
    switch(userDropDown){
      case false:
        document.body.style.overflow = 'hidden'
        break
      case true: 
        document.body.style.overflow = 'scroll'
    }
   }

  // state and toggle for shopping cart 
  const[shoppingCart, setShoppingCart] = useState(false);
  const toggleShoppingCart = () => {
    setShoppingCart(!shoppingCart)
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
            <FiShoppingBag
            onClick={toggleShoppingCart}/>
          </span>
        </div>
      </Container>
    </Navbar>
    <div className='subnav'>
      <Container fluid>
        <div className='subnav-grid'>
        {user && (
          <>
          <li><a href="">Min prenumeration</a></li>
          <li><a href="">Konto</a></li>
          </>
          )}
          {!user && (
            <>
            <Link 
            style={style}
            activeClass="active"
              to="pickColor"
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
             >
              Kom igång
             </Link>
             <Link 
             style={style}
            activeClass="active"
              to="howItWorks"
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
             >
              Så funkar det
             </Link>
             <li><a href="">Produkter</a></li>
            <li><a href="">FAQ & hjälp</a></li>
            </>
          )}
             <Link 
             style={style}
            activeClass="active"
              to="aboutUs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
             >
              Om oss
             </Link>
        </div>
      </Container>
    </div>
    <div className={userDropDown ? 'user-dropdown is-active' : 'user-dropdown'}>
      <div className='close-btn' onClick={toggleUserDropDown}/>
 
        {logInContent && (
          <> {/* EN INLINE IF HÄR SOM KOLLAR OM ANVÄNDAREN ÄR INLOGGAD OCH
          BEROENDE PÅ SVAR VISAR LOGIN ELLER LOGOUT DROPDOWN NEDAN? */}
          <LogInDropDown toggleSignUpContent={toggleSignUpContent}/>
          <LogOutDropDown /> 
          </>
        )}
        {signUpContent && (
          <SignUpDropDown toggleLogInContent={toggleLogInContent}/> 
        )}
    </div>
    <div className={shoppingCart ? 'shopping-cart is-active' : 'shopping-cart'}>
        <div className='close-btn' onClick={() => setShoppingCart(!shoppingCart)}/>
            <ShoppingCart shoppingCart={shoppingCart}/> 
    </div>
    </>
  );
}

export default Nav;
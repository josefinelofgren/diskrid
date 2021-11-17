import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FiShoppingBag, FiUser } from "react-icons/fi";
import LogInDropDown from './user/LoginDropDown';
import LogOutDropDown from './user/LogoutDropDown';
import SignUpDropDown from './user/SignUpDropDown';
import ShoppingCart from './user/ShoppingCart';
import { Link } from 'react-scroll';

interface Props {
  user: any,
  setUser: any
}

function Nav(props: Props) {

  const style = {
    'cursor': 'pointer'
  }

  const { user, setUser } = props;
  const userLoggedIn = localStorage.getItem('currentUser') !== null;

// states 
const[userDropDown, setUserDropDown] = useState(false);
const[logInContent, setLogInContent] = useState(false);
const[shoppingCart, setShoppingCart] = useState(false);
const[signUpContent, setSignUpContent] = useState(false);

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

// toggle for shopping cart
const toggleShoppingCart = () => {
  setShoppingCart(!shoppingCart);
  setUserDropDown(false);
}

//state and toggle for login and signup content in user dropdown
const toggleLogInContent = () => {
  setLogInContent(true);
  setSignUpContent(false);
}

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
          <li><Link to='/'>Min prenumeration</Link></li>
          <li><Link to='/'>Konto</Link></li>
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
             <li><Link to='/'>Produkter</Link></li>
            <li><Link to='/'>FAQ & hjälp</Link></li>
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
      <div className='close-btn' onClick={() => setUserDropDown(false)}/>
        {logInContent && (
          <> 
          {!userLoggedIn ? <LogInDropDown 
              toggleSignUpContent={toggleSignUpContent} 
              setUserDropDown={setUserDropDown}
              setUser={setUser}/> : <LogOutDropDown setUser={setUser} setUserDropDown={setUserDropDown}/> }
          </>
        )}
        {signUpContent && (
          <SignUpDropDown 
              toggleLogInContent={toggleLogInContent} 
              setUserDropDown={setUserDropDown}
              setUser={setUser}/> 
        )}
    </div>
    <div className={shoppingCart ? 'shopping-cart is-active' : 'shopping-cart'}>
        <div className='close-btn' onClick={() => setShoppingCart(false)}/>
            <ShoppingCart shoppingCart={shoppingCart}/> 
    </div>
    </>
  );
}

export default Nav;
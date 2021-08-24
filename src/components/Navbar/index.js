
import React, { useState, useEffect } from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {
  const[scrollNav, setScrollNav] = useState(false);

  const changeNav = () =>{
      if(window.scrollY >= 80){
          setScrollNav(true)
      }
      else{
          setScrollNav(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
      scroll.scrollToTop();
  }

  return (
    <>
     <Nav scrollNav={scrollNav}>
        <NavLink to='/' onClick={toggleHome}>FIRESIDE CARIBBEAN FOOD</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;

import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  padding:10px;
  justify-content: left;
  font-weight: 700;
  left: 0;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: left;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  padding:10px;
  transform: translateY(-100%, -95%);
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

`;

export const Bars = styled(FaFire)`
  font-size: 2rem;
  
`;

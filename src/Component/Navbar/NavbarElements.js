import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  height: 80px;
  width: 100%;
  
  padding: 1rem 2rem;
  z-index: 100;
`;

export const Logo = styled(Link)`
  color: #2979ff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 30px;
`;
export const MenueBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 870px) {
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0.8rem;
    right: 0;
    transform: translate(-50%, 25%);
    color: #2979FF;
  }
`;

export const NavMenue = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30em;
 
  @media screen and (max-width: 1400px) {
    margin-left: 20em;
  } 

  @media screen and (max-width: 1200px) {
    margin-left: 15em;
  } 
  @media screen and (max-width: 1100px) {
    margin-left: 5em;
  } 
  @media screen and (max-width: 950px) {
    margin-left: 0;
  } 
  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  position: relative;

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavMenueLinks = styled(Link)`
  color: #2979ff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  
`;

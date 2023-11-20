import React from "react";

import {
  Nav,
  Logo,
  MenueBars,
  NavMenue,
  NavMenueLinks,
  NavBtn,
} from "./NavbarElements";
import { MenueData } from "../Data/MenueData";
import { Button } from "../Buttons/Button";

function Navbar({ toggle }) {
  
  return (
    <>
      <Nav>
        <Logo to="/">Home</Logo>
        <MenueBars onClick={toggle} />
        <NavMenue >
          {MenueData.map((item, index) => (
            <NavMenueLinks to={item.link} key={index}>
              {item.title}
            </NavMenueLinks>
          ))}
        </NavMenue>
        <NavBtn>
          <Button to="/signup" primary="true" textColor="true">
            Get Started
          </Button>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Navbar;

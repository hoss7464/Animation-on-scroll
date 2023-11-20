import React from "react";
import {
    SideContainer,
    SideIcon,
    CloseIcon,
    SideWrapper,
    SideMenue,
    SideLink,
    SideBtnWrapper,
    SideBtn,
  } from "./SidebarElements";

function Sidebar({toggle, isOpen}) {
  return (
    <>
      <SideContainer toggle={toggle} isOpen={isOpen} >
        <SideIcon onClick={toggle} >
          <CloseIcon  />
        </SideIcon>
        <SideWrapper>
          <SideMenue>
            <SideLink to="/homse" onClick={toggle}  >Homes</SideLink>
          </SideMenue>
          <SideMenue>
            <SideLink to="/about" onClick={toggle}  >About</SideLink>
          </SideMenue>
          <SideMenue>
            <SideLink to="/services" onClick={toggle}  >Services</SideLink>
          </SideMenue>
          <SideMenue>
            <SideLink to="/contactus" onClick={toggle}  >Contact Us</SideLink>
          </SideMenue>
          <SideMenue>
            <SideLink to="videos" onClick={toggle}  >Videos</SideLink>
          </SideMenue>
          <SideBtnWrapper>
            <SideBtn to="/signin" onClick={toggle}  >Sign In</SideBtn>
          </SideBtnWrapper>
        </SideWrapper>
      </SideContainer>
    </>
  );
}

export default Sidebar;

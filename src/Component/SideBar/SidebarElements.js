import styled from "styled-components";
import { Link  } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SideContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #f5f8ff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
`;

export const SideIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #2979ff;
`;

export const SideWrapper = styled.div`
  color: #fff;
`;

export const SideMenue = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 15px);

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideLink = styled(Link)`
  height: 60px;
  width: 50%;
  position: relative;
  left: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  list-style: none;
  border: solid 1px #2979ff;
  transition: 0.2s ease-in-out;
  color: #2979ff;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 0 2px #18a0fb;

  &:hover {
    color: #fff;
    background-color: #2979ff;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align:center;
`;

export const SideBtn = styled(Link)`
  height: 60px;
  width: 50%;
  background: #2979ff;
  white-space: nowrap;
  padding-top: 0.8em;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
`;

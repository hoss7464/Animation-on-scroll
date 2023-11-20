import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button= styled(Link)`
  text-decoration: none;
  background: ${({primary}) => (primary ? "#2979FF" : "unset")};
  border-radius: 6px;
  white-space: nowrap;
  padding: 12px 20px;
  color: ${({textColor}) => (textColor ? "#fff" : "#2979FF")};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionButton= styled(Link)`
  text-decoration: none;
  width: 180px;
  background: unset;
  white-space: nowrap;
  padding: 12px 50px;
  color: #2979FF;
  outline: none;
  border: solid 2px #2979FF;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #2979FF;
    color: #fff;
  }
`;

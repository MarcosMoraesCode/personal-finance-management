import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationUl = styled.ul`
  display: flex;
  font-family: "Roboto";
  flex-direction: row;
  align-items: center;
  background-color: black;
  opacity: 0.85;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  height: 6vh;
`;

export const StyledLink = styled(NavLink)`
  color: grey;
  background-color: transparent;
  display: flex;
  width: 100px;
  height: 6vh;
  margin: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
  text-decoration: none;
  font-weight: bolder;

  :hover {
    color: white;
    background-color: grey;
    transition: 0.5s;
  }

  &.${(props) => props.activeClassName} {
    color: red;
  }
`;

//<StyledLink activeClassName="any" />;

export const WrappNavLink = styled.div`
  background-color: gree;
  width: 100px;
  height: 100%;
`;

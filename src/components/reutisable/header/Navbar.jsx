import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../themes";

export default function Navbar() {
  return (
    <NavbarStyled className="nav">
      <li>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" activeClassName="active">
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.ul`
  display: flex;
  font-weight: 400;
  align-items: center;

  li {
    margin-right: 35px;
  }

  a {
    color: ${theme.colors.tertiary};
    font-size: 16.8px;
    transition: all 0.3s linear;

    &:hover {
      color: ${theme.colors.lighten_primary};
      font-weight: 500;
    }
}

  .active {
    color: ${theme.colors.lighten_primary};
    font-weight: 500;
  }
`;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../Context/cart_context";

const Navbar = () => {
  const { total_item } = useCartContext();

  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 2.6rem;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.26s linear;
          }

          text-decoration: none;
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
  `;

  return (
    <Nav>
      <div>
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/account">
              Account
            </NavLink>
            </li>
          <li>
            <NavLink className="navbar-link" to="/cart">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;

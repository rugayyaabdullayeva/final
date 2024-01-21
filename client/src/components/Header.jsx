import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  return (
    <div id="header">
      <NavLink to="/">
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
          alt=""
        />
      </NavLink>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="latest">Latest</NavLink>
          </li>
          <li>
            <NavLink to="blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="pages">Pages</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="add">Add</NavLink>
          </li>
          <li>
            <NavLink to="wishlist">Wishlist</NavLink>
          </li>
        </ul>
      </nav>
      <ul className="nav-icons">
        <FaSearch />
        <FaUser />
        <FaShoppingCart />
      </ul>
    </div>
  );
};

export default Header;

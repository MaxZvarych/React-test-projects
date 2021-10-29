/* eslint-disable @typescript-eslint/no-empty-interface */
import { Link } from "react-router-dom";
import * as React from "react";
import "./Navigation.scss";
import Home from "../Home/Home";
import { useState } from "react";

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const addTextDecoration = function (e: any) {
    e.target.style.textDecoration = "underline rgb(0, 255, 221)";
  };
  const removeTextDecoration = function (e: any) {
    e.target.style.textDecoration = "none";
  };
  return (
    <nav>
      <ul>
        <li>
          <Link
            className='link'
            to='/'
            onMouseOver={addTextDecoration}
            onMouseLeave={removeTextDecoration}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className='link'
            to='/about'
            onMouseOver={addTextDecoration}
            onMouseLeave={removeTextDecoration}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className='link'
            to='/users'
            onMouseOver={addTextDecoration}
            onMouseLeave={removeTextDecoration}
          >
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

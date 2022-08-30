import React from "react";
import logo from '../logo192.png'

export default function Navbar() {
  return (
    <nav className="nav">
      <img className="logo" src={logo} />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  )
}
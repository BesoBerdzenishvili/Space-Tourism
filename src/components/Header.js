import React from "react";
import { Link } from "react-router-dom";
import { styled } from "../stitches.config";
import logo from "../assets/logo.svg";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 999,

  position: "absolute",
  top: 44,
  right: 0,
  left: 0,

  "& a": {
    background: "transparent",
    padding: "36px 0",
    marginRight: 42,
    color: "white",
    textDecoration: "none",
    fontFamily: "Barlow Condensed",
    fontSize: 19,
    letterSpacing: 2,

    "&:first-child": {
      marginLeft: 124,
    },

    "&:hover": {
      borderBottom: "4px solid #C0C0C0",
      paddingBottom: 32,
      color: "#C0C0C0",
    },

    "&:focus": {
      borderBottom: "4px solid white",
      paddingBottom: 32,
    },
  },
});
const Img = styled("img", {
  margin: "0 69px 0 44px",
});
const Line = styled("hr", {
  width: 474,
  zIndex: 99,
});
const Nav = styled("div", {
  background: "rgba(255, 255, 255, 0.51)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(9.3px)",
  maxWidth: 844,
  width: "100%",
  height: 94,

  display: "flex",
  alignItems: "center",
});

export default function Header() {
  return (
    <Wrapper>
      <Img src={logo} alt="black star in white circle" />
      <Line />
      <Nav>
        <Link to={`/`}>
          <b>00 HOME</b>
        </Link>
        <Link to={`/destination`}>
          <b>01 DESTINATION</b>
        </Link>
        <Link to={`/crew`}>
          <b>02 CREW</b>
        </Link>
        <Link to={`/technology`}>
          <b>03 TECHNOLOGY</b>
        </Link>
      </Nav>
    </Wrapper>
  );
}

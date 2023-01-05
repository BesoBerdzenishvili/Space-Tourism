import React from "react";
import { styled } from "../stitches.config";
// import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  position: "absolute",
  top: 44,
  right: 0,
  left: 0,
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
});
const Button = styled("button", {
  border: "none",
  backgroundColor: "transparent",
  marginRight: 42,
  cursor: "pointer",
  height: 94,
  color: "white",
  fontFamily: "Barlow Condensed",
  fontSize: 19,
  letterSpacing: 2,

  "&:first-child": {
    marginLeft: 124,
  },

  "&:hover": {
    borderBottom: "4px solid #C0C0C0",
    height: 90,
    color: "#C0C0C0",
  },

  "&:focus": {
    borderBottom: "4px solid white",
    height: 90,
  },
});

export default function Header({ buttons }) {
  return (
    <Wrapper>
      <Img src={logo} alt="black star in white circle" />
      <Line />
      <Nav>
        {buttons.map((i, index) => (
          // <Link to={`${i}`}>
          <Button key={i}>
            <b>
              0{index} {i.toUpperCase()}
            </b>
          </Button>
          // </Link>
        ))}
      </Nav>
    </Wrapper>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    "& span": {
      fontWeight: 200,
    },
  },
});
const Img = styled("img", {
  margin: "0 69px 0 44px",
  cursor: "pointer",
});
const Line = styled("hr", {
  width: 474,
  zIndex: 99,
});
const Nav = styled("div", {
  background: "rgba(255, 255, 255, 0.11)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(9.3px)",
  maxWidth: 844,
  width: "100%",
  height: 94,

  display: "flex",
  alignItems: "center",
});

export default function Header() {
  const pages = [
    { name: "Home", link: "" },
    { name: "Destination", link: "destination" },
    { name: "Crew", link: "crew" },
    { name: "Technology", link: "technology" },
  ];
  const [page, setPage] = useState("Home");
  const handleClick = (pageName) => {
    setPage(pageName);
  };

  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/");
  }

  return (
    <Wrapper>
      <Img
        src={logo}
        alt="black star in white circle"
        onClick={handleNavigation}
      />
      <Line />
      <Nav>
        {pages.map((i, index) => (
          <Link
            key={i.name}
            to={`/${i.link}`}
            onClick={() => handleClick(i.name)}
            style={{
              borderBottom: i.name === page && "4px solid white",
              paddingBottom: i.name === page && 32,
            }}
          >
            <b>
              0{index} <span>{i.name.toUpperCase()}</span>
            </b>
          </Link>
        ))}
      </Nav>
    </Wrapper>
  );
}

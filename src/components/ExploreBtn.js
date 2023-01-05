import React from "react";
import { Link } from "react-router-dom";
import { styled } from "../stitches.config";

const Wrapper = styled("div", {
  "& a": {
    borderRadius: 999,
    textDecoration: "none",
    color: "$black",
  },
});

const OuterCircle = styled("div", {
  backgroundColor: "white",
  borderRadius: 999,
  opacity: 0.5,
  display: "none",
  padding: 221,
  position: "relative",
  left: 66,
});

const InnerCircle = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "white",
  borderRadius: 999,
  height: 267,
  width: 267,
  fontFamily: "Bellefair",
  fontSize: 32,
  cursor: "pointer",

  "&:hover div": {
    display: "initial",
  },

  "&:active": {
    height: 237,
    width: 237,
  },

  "&:hover p": {
    position: "relative",
    right: "83%",
  },
});

export default function ExploreBtn() {
  return (
    <Wrapper>
      <Link to={"/destination"}>
        <InnerCircle>
          <OuterCircle />
          <p>EXPLORE</p>
        </InnerCircle>
      </Link>
    </Wrapper>
  );
}

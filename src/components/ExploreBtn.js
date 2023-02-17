import React from "react";
import { styled } from "../stitches.config";

const StyledExploreBtn = styled("button", {
  height: 267,
  width: 267,
  fontFamily: "Bellefair",
  fontSize: 32,
  borderRadius: 999,
  border: "none",
  cursor: "pointer",
  transition: "box-shadow 0.3s ease-in-out",

  "&:hover": {
    boxShadow: "0px 0px 0px 87px rgba(255, 255, 255, .5)",
  },
  "&:active": {
    transform: "scale(.97)",
  },
});

export default function ExploreBtn() {
  return <StyledExploreBtn>EXPLORE</StyledExploreBtn>;
}

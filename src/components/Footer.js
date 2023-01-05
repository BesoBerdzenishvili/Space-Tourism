import React from "react";
import { styled } from "../stitches.config";

const Container = styled("footer", {
  position: "absolute",
  bottom: 14,
  left: "50%",
  transform: "translate(-50%)",
  color: "white",
  fontSize: 12,
});

export default function Footer() {
  return (
    <Container>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io/home"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://github.com/BesoBerdzenishvili/Space-Tourism"
        target="_blank"
        rel="noreferrer"
      >
        Beso Berdzenishvili
      </a>
    </Container>
  );
}

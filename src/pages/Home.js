import React from "react";
import { Link } from "react-router-dom";
import { styled } from "../stitches.config";
import bgImg from "../assets/background-home.jpg";
import ExploreBtn from "../components/ExploreBtn";

const Wrapper = styled("div", {
  backgroundImage: `url(${bgImg})`,
  height: "100vh",
});
const Section = styled("section", {
  position: "absolute",
  top: "80%",
  left: 0,
  right: 0,
  transform: "translate(0, -80%)",

  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});
const Article = styled("article", {
  color: "white",
  width: "29vw",

  "& h5": {
    fontSize: 28,
    fontWeight: 200,
  },
  "& h1": {
    fontFamily: "Bellefair",
    fontSize: 128,
    margin: "44px 0 57px 0",
  },
  "& p": {
    lineHeight: 2,
  },
});

export default function Home() {
  return (
    <Wrapper>
      <Section>
        <Article>
          <h5>SO, YOU WANT TO FLY TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </Article>
        <Link to={"/destination"}>
          <ExploreBtn />
        </Link>
      </Section>
    </Wrapper>
  );
}

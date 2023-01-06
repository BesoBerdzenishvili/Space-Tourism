import { useState } from "react";
import { styled } from "../stitches.config";
import bgImg from "../assets/background-technology.jpg";

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

  "& h5": {
    color: "white",
    fontSize: 28,
    fontWeight: 200,
    marginBottom: 44,

    "& span": {
      color: "grey",
    },
  },
});
const Article = styled("article", {
  color: "white",
  width: "44vw",
  height: 500,

  "& h2": {
    fontWeight: 400,
    fontSize: 16,
  },
  "& h1": {
    fontFamily: "Bellefair",
    fontWeight: 400,
    fontSize: 48,
    margin: "11px 0 22px 0",
  },
  "& p": {
    lineHeight: 2,
  },
});
const Ul = styled("article", {
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  bottom: 0,

  "& li": {
    marginRight: 34,
    cursor: "pointer",
  },
});

const Img = styled("img", {
  position: "absolute",
  right: 0,
  top: 0,
});

const Ball = styled("div", {
  backgroundColor: "transparent",
  border: "1px solid white",
  height: 74,
  width: 74,
  borderRadius: 99,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 22,
  fontSize: 22,
  fontFamily: "Bellefair",

  "&:hover": {
    backgroundColor: "#C0C0C0",
    color: "$black",
  },
});
const TechInfo = styled("div", {
  display: "flex",
});

export default function Technology({ techInfo }) {
  const [technology, setTechnology] = useState(0);
  const techNames = techInfo.map((index) => index);

  const handleClick = (technologyIndex) => {
    setTechnology(technologyIndex);
  };
  return (
    <Wrapper>
      <Section>
        <Article>
          <h5>
            <span>03</span> SPACE LAUNCH 101
          </h5>

          <TechInfo>
            <Ul>
              {techNames.map((j, index) => (
                <li onClick={() => handleClick(index)} key={j}>
                  <Ball
                    style={{
                      backgroundColor: j === techNames[technology] && "white",
                      color: j === techNames[technology] && "black",
                    }}
                  >
                    {index + 1}
                  </Ball>
                </li>
              ))}
            </Ul>

            <div>
              <h2>THE TERMINOLOGY...</h2>
              <h1>{techInfo[technology].name.toUpperCase()}</h1>
              <p>{techInfo[technology].description}</p>
            </div>
          </TechInfo>
        </Article>
        <div>
          <Img src={techInfo[technology].img} alt={techInfo[technology].name} />
        </div>
      </Section>
    </Wrapper>
  );
}

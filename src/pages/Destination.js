import { useState } from "react";
import { styled } from "../stitches.config";
import bgImg from "../assets/background-destination.jpg";

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
  width: "29vw",

  "& h1": {
    fontFamily: "Bellefair",
    fontSize: 128,
    margin: "44px 0 57px 0",
    fontWeight: 400,
  },
  "& p": {
    lineHeight: 2,
  },
  "& hr": {
    margin: "54px 0 34px 0",
  },
});
const Ul = styled("article", {
  listStyleType: "none",
  display: "flex",

  "& li": {
    marginRight: 34,
    cursor: "pointer",
    paddingBottom: 14,

    "&:hover": {
      color: "#C0C0C0",
      borderBottom: "4px solid #C0C0C0",
      paddingBottom: 10,
    },
  },
});
const TravelInfo = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "70%",

  "& div > h6": {
    letterSpacing: 2,
    fontWeight: 100,
    fontSize: 12,
  },
  "& div > h3": {
    letterSpacing: 1,
    fontWeight: 400,
    fontSize: 22,
    fontFamily: "Bellefair",
    marginTop: 8,
  },
});

export default function Destination({ planetInfo }) {
  const [planet, setPlanet] = useState(0);
  const planetNames = planetInfo.map((i) => i.name);

  const handleClick = (planetIndex) => {
    setPlanet(planetIndex);
  };
  return (
    <Wrapper>
      <Section>
        <div>
          <h5>
            <span>01</span> PICK YOUR DESTINATION
          </h5>
          <img src={planetInfo[planet].img} alt={planetInfo[planet].name} />
        </div>
        <Article>
          <Ul>
            {planetNames.map((j, index) => (
              <li
                style={{
                  borderBottom: j === planetNames[planet] && "4px solid white",
                  paddingBottom: 10,
                }}
                onClick={() => handleClick(index)}
                key={j}
              >
                {j.toUpperCase()}
              </li>
            ))}
          </Ul>
          <h1>{planetInfo[planet].name.toUpperCase()}</h1>
          <p>{planetInfo[planet].description}</p>
          <hr />
          <TravelInfo>
            <div>
              <h6>AVG. DISTANCE</h6>
              <h3>{planetInfo[planet].distance.toUpperCase()}</h3>
            </div>
            <div>
              <h6>EST. TRAVEL TIME</h6>
              <h3>{planetInfo[planet].travel.toUpperCase()}</h3>
            </div>
          </TravelInfo>
        </Article>
      </Section>
    </Wrapper>
  );
}

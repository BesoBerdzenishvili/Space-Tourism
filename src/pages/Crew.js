import { useState } from "react";
import { styled } from "../stitches.config";
import bgImg from "../assets/background-crew.jpg";

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
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: "white",
  width: "29vw",
  height: 500,

  "& h2": {
    fontFamily: "Bellefair",
    fontWeight: 400,
    fontSize: 38,
    color: "grey",
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
  "& hr": {
    margin: "54px 0 34px 0",
  },
});
const Ul = styled("article", {
  listStyleType: "none",
  display: "flex",
  position: "relative",
  bottom: 0,

  "& li": {
    marginRight: 34,
    cursor: "pointer",
  },
});

const Img = styled("img", {
  position: "relative",
  bottom: "-6vh",
  height: "70vh",
});

const Ball = styled("img", {
  backgroundColor: "grey",
  height: 14,
  width: 14,
  borderRadius: 11,

  "&:hover": {
    backgroundColor: "#C0C0C0",
  },
});

const MemberInfo = styled("div", {
  // margin: "62px 0",
});

export default function Crew({ crewInfo }) {
  const [member, setMember] = useState(0);
  const crewNames = crewInfo.map((i) => i.name);

  const handleClick = (memberIndex) => {
    setMember(memberIndex);
  };
  return (
    <Wrapper>
      <Section>
        <Article>
          <h5>
            <span>02</span> MEET YOUR CREW
          </h5>

          <MemberInfo>
            <h2>{crewInfo[member].role.toUpperCase()}</h2>
            <h1>{crewInfo[member].name.toUpperCase()}</h1>
            <p>{crewInfo[member].bio}</p>
          </MemberInfo>
          <Ul>
            {crewNames.map((j, index) => (
              <li onClick={() => handleClick(index)} key={j}>
                <Ball
                  style={{
                    backgroundColor: j === crewNames[member] && "white",
                  }}
                />
              </li>
            ))}
          </Ul>
        </Article>
        <div>
          <Img src={crewInfo[member].img} alt={crewInfo[member].name} />
        </div>
      </Section>
    </Wrapper>
  );
}

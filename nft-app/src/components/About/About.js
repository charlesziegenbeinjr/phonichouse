import React from "react";
import Image1 from "./1.jpg";
import Image2 from "./2.jpg";
import Image3 from "./3.jpg";
import "./About.css";
const AboutTitle = () => (
  <p
    style={{
      color: "#00000",
      fontSize: 16,
      marginTop: "12px",
      marginLeft: "15px",
      fontWeight: "bolder",
      fontSize: 16,
    }}
  >
    About
  </p>
);
const MerchandiseTitle = () => (
  <p
    style={{
      color: "#00000",
      fontSize: 16,
      marginTop: "12px",
      marginLeft: "15px",
      fontWeight: "bolder",
      fontSize: 14,
      opacity: 0.7,
    }}
  >
    Merchandise
  </p>
);
const TandE = () => (
  <p
    style={{
      color: "#00000",
      fontSize: 16,
      marginTop: "12px",
      marginLeft: "15px",
      fontWeight: "bolder",
      fontSize: 14,
      opacity: 0.7,
    }}
  >
    Tickets and Events
  </p>
);
const AboutText = () => (
  <p
    style={{
      //   color: "#00000",
      fontSize: "13px",
      marginTop: "12px",
      marginLeft: "15px",
      marginRight: "15px",
      fontWeight: "light",
    }}
  >
    lorem is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been the industry's standard dummy text ever since the 1500s.
  </p>
);
const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 0.2,
      opacity: 0.2,
    }}
  />
);
export default function About() {
  return (
    <div className="AboutParentDiv">
      <AboutTitle />
      <ColoredLine color="black" />
      <AboutText />
      <MerchandiseTitle />

      <div className="AboutHorizontalCardsScroll">
        <img className="HorizontalCardImage" src={Image1} />
        <img className="HorizontalCardImage" src={Image2} />
        <img className="HorizontalCardImage" src={Image3} />
      </div>
      <TandE />
      <div
        style={{
          backgroundColor: "#fff",
          height: "30px",
          width: "250px",
          marginLeft: "18px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img
          src={Image1}
          style={{
            width: "40px",
            height: "30px",
            borderRadius: "2px",
          }}
        />
        <span
          style={{
            marginTop: "4px",
            marginLeft: "4px",
            fontSize: "13px",
            fontWeight: "bold",
            opacity: 0.6,
          }}
        >
          Rolling Lound 2022
        </span>
        <br />
      </div>
    </div>
  );
}

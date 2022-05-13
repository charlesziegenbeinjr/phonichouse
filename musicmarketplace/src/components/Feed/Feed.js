import React from "react";
import "./Feed.css";
import SmallFeedCard from "../SmallFeedCard/SmallFeedCard";
import { useEffect } from "react";
import Image1 from "./14.jpg";
import Image2 from "./15.jpg";
import Image3 from "./16.jpg";
import Image4 from "./18.jpg";
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
const FeedText = () => (
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
    Feed
  </p>
);
const FeedData = [
  {
    status: "Following",
    Name: "Jill",
    image: Image1,
    Description:
      "I have been listening to this new artist, click here to check it out.",
    click: "",
  },
  {
    status: "Following",
    Name: "Josh",
    image: Image4,
    Description:
      "I have been listening to this new artist, click here to check it out.",
    click: "",
  },
  {
    status: "Fire Alarm - New Music",
    Name: "Who Want Smoke? (Remmix)",
    image: Image2,
    Description:
      "Nardo Wick's original song gets a remix from Durkio, 21 and Herbo - objectively the hardest song of 2021",
    click: "click to open in spotify",
  },
  {
    status: "Following",
    Name: "Keisha Leys",
    image: Image3,
    Description: "Can't believe how good Jill's first album is!!!",
    click: "",
  },
  {
    status: "Post",
    Name: "Jane Smith",
    image: Image4,
    Description:
      "These TAYLOR shares gain crazy _ will artists be optionable soon?",
    click: "",
  },
];
export default function Feed() {
  return (
    <div className="FeedParentDiv">
      <FeedText />
      <ColoredLine color="black" />
      <div className="Feedcn">
        {FeedData.map((item, index) => {
          return <SmallFeedCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

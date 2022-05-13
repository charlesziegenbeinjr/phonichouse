import React from "react";
import "./LatestUpdates.css";
import SmallFeedCard from "../LU-SmallFeedCard/SmallFeedCard";
import { useEffect } from "react";
import Image1 from "./14.jpg";
import Image2 from "./15.jpg";
import Image3 from "./16.jpg";
import Image4 from "./18.jpg";
import Button from "@mui/material/Button";

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
const CreatePost = (props) => (
  <Button
    // variant="contained"
    style={{
      background: "#eaf0fb",
      borderRadius: "2px",
      marginLeft: "48px",
      marginTop: "15px",
      width: 100,
      // height: 35,
      // float: "right",
    }}
  >
    <span style={{ fontSize: "10px", color: "#0F123F" }}>{props.value}</span>
  </Button>
);

const FeedText = () => (
  <p
    style={{
      color: "#00000",
      fontSize: 16,
      marginTop: "15px",
      marginLeft: "15px",
      fontWeight: "bolder",
      fontSize: 16,
    }}
  >
    Latest Updates
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
    currency: "",
  },
  {
    status: "Following",
    Name: "Josh",
    image: Image4,
    Description:
      "I have been listening to this new artist, click here to check it out.",
    click: "",
    currency: "",
  },
  {
    status: "Fire Alarm - New Music",
    Name: "Who Want Smoke?",
    image: Image2,
    Description:
      "Nardo Wick's original song gets a remix from Durkio, 21 and Herbo - objectively the hardest song of 2021",
    click: "Start Investing",
    currency: "HOZIR $114.58",
  },
  {
    status: "Following",
    Name: "Keisha Leys",
    image: Image3,
    Description: "Can't believe how good Jill's first album is!!!",
    click: "",
    currency: "",
  },
  {
    status: "Post",
    Name: "Jane Smith",
    image: Image4,
    Description:
      "These TAYLOR shares gain crazy _ will artists be optionable soon?",
    click: "Add Shares",
    currency: "ESHRN $243.58",
  },
];
export default function Feed() {
  return (
    <div className="FeedParentDiv">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <FeedText />
        <CreatePost value="+ Create Post" />
      </div>
      <ColoredLine color="black" />
      <div className="Feedcn">
        {FeedData.map((item, index) => {
          return <SmallFeedCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

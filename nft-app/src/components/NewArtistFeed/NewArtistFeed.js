import React from "react";
import "./NewArtistFeed.css";
import Image1 from "./14.jpg";
import Image2 from "./15.jpg";
import Image3 from "./16.jpg";
import Image4 from "./18.jpg";
import NewArtistSmallFeedCard from "../NewArtistSmallFeedCard/NewArtistSmallFeedCard";
const FeedText = () => (
  <p
    style={{
      color: "#00000",
      fontSize: 16,
      marginTop: "2px",
      marginLeft: "15px",
      fontWeight: "bolder",
      fontSize: 16,
      // position: "absolute"
    }}
  >
    New Artist's Feed
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
const FeedData = [
  {
    status: "Following",
    Name: "New Artist",
    image: Image1,
    Description:
      "Just joined Ray Anna's second family- can't believe how much I learned from her already!",
  },
  {
    status: "Following",
    Name: "New Artist",
    image: Image1,
    Description: "New Album coming next month, stay tuned.",
  },
  {
    status: "Following",
    Name: "New Artist",
    image: Image1,
    Description:
      "So thankful for everyone's support in our phonichouse journey. Couldn't have done it without you.",
  },
  {
    status: "Following",
    Name: "New Artist",
    image: Image1,
    Description: "Can't believe how good Jill's first album is!!!",
  },
];
export default function NewArtistFeed() {
  return (
    <div className="NewArtistFeedParentDiv">
      <FeedText />
      <ColoredLine />
      <div className="NewArtistFeedColumn">
        {FeedData.map((item, index) => {
          return <NewArtistSmallFeedCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

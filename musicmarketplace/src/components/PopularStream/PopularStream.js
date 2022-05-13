import React from "react";
import "./PopularStream.css";
import Image1 from "./14.jpg";
import Image2 from "./15.jpg";
import Image3 from "./16.jpg";
import Image4 from "./18.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
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
    Popular Streams
  </p>
);
const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 0.1,
      opacity: 0.2,
    }}
  />
);
const Data = [
  {
    Name: "Through the Valley",
    image: Image1,
    Value: "32,439,477",
  },
  {
    Name: "Ain't No Son o' Mine",
    image: Image4,
    Value: "8,206,557",
  },
  {
    Name: "Scratch the itch",
    image: Image2,
    Value: "5,283,255",
  },
  {
    Name: "Go",
    image: Image3,
    Value: "8,132,641",
  },
  {
    Name: "Nusrat Fateh Ali",
    image: Image4,
    Value: "8,132,641",
  },
];
export default function PopularStream() {
  return (
    <div className="PopularStreamParentDiv">
      <FeedText />
      <ColoredLine color="black" />
      <div className="PS-column">
        {Data.map((item, index) => {
          return (
            <div>
              <div className="PopularStreamInner">
                <div style={{ diplay: "flex", flexDirection: "row" }}>
                  <img
                    src={item.image}
                    alt="new"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "20px",
                      float: "left",
                      marginLeft: "10px",
                    }}
                  />
                  <span
                    style={{
                      float: "left",
                      marginLeft: "10px",
                      marginTop: 6,
                      fontSize: 13,
                    }}
                  >
                    {item.Name}
                  </span>
                  <span style={{ float: "right", marginLeft: 8, marginTop: 4 }}>
                    <AiFillPlayCircle />
                  </span>
                  <span
                    style={{
                      float: "right",
                      fontSize: 11,
                      marginTop: 8,
                      marginLeft: 8,
                      opacity: 0.5,
                    }}
                  >
                    {item.Value}
                  </span>
                </div>
                {/* <ColoredLine color="black" /> */}
              </div>
              <ColoredLine color="black" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

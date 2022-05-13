import React from "react";
import "./ChatOnNavbar.css";
import Image1 from "./14.jpg";
import Image2 from "./15.jpg";
import Image3 from "./16.jpg";
import Image4 from "./18.jpg";
const FeedData = [
  {
    Name: "Jill",
    image: Image1,
  },
  {
    Name: "Josh",
    image: Image4,
  },
  {
    Name: "John",
    image: Image2,
  },
  {
    Name: "Ahsan Iqbal",
    image: Image3,
  },
];
export default function ChatOnNavbar() {
  return (
    <div id="ChatOnNavbarParentDiv">
      <div id="ChatOnNavbarFeedCn">
        <div
          style={{
            // marginTop: "25px",
            marginBottom: "10px",
            // position: "absolute",
            fontWeight: "bold",
          }}
        >
          Friends
        </div>

        {FeedData.map((item, index) => {
          return (
            <div className="ChatOnNavBarInner">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  src={item.image}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "20px",
                    float: "left",
                    // marginLeft: "10px",
                  }}
                />
                <span
                  style={{
                    float: "left",
                    marginLeft: "10px",
                    // fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "14px",
                    lineHeight: "21px",
                    /* identical to box height */

                    color: "#FFFFFF",
                  }}
                >
                  {item.Name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";
import { HiShare } from "react-icons/hi";
import { IconContext } from "react-icons";
export default function NewArtistSmallFeedCard(props) {
  return (
    <div
      className="innerNewArtistSmallFeedCard"
      style={{
        border: "#fff",
      }}
    >
      <div>
        <IconContext.Provider value={{ color: "black", size: "15px" }}>
          <div
            style={{
              float: "right",
              marginRight: "10px",
              marginTop: "2px",
              marginBottom: 1,
            }}
          >
            <AiTwotoneLike />
            <div
              style={{
                float: "right",
                marginLeft: "10px",
                marginTop: "2px",
              }}
            >
              <HiShare />
            </div>
          </div>
        </IconContext.Provider>
      </div>
      <br />
      <div>
        <img
          src={props.data.image}
          alt="new"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "20px",
            float: "left",
            marginLeft: "10px",
          }}
        />
        <span
          style={{
            float: "left",
            marginLeft: "10px",
            fontWeight: "bold",
          }}
        >
          {props.data.Name}
          <div
            style={{
              //   float: "left",
              fontSize: 10,
              marginRight: 35,
              //   marginBottom: 1,
              color:
                props.data.status == "Following" || props.data.status == "Post"
                  ? "#1376C1"
                  : "#F61414",
            }}
          >
            {props.data.status}
          </div>
        </span>
      </div>
      {/* <br /> */}
      <div>
        <span
          style={{
            float: "left",
            fontSize: 11,
            marginTop: "5px",
            marginBottom: "10px",
            marginLeft: "15px",
            marginRight: "15px",
            textAlign: "start",
            fontFamily: "inherit",
            fontWeight: "light",
          }}
        >
          {props.data.Description}
          <span
            style={{
              float: "right",
              fontSize: 11,
              marginTop: "5px",
              // marginBottom: "10px",
              // marginLeft: "15px",
              // marginRight: "15px",
              textAlign: "start",
              fontFamily: "inherit",
              fontWeight: "light",
              color: "#51C651",
              fontStyle: "italic",
              textDecoration: "underline",
            }}
          >
            {props.data.click}
          </span>
        </span>
      </div>
    </div>
  );
}

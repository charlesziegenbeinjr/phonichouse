import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";
import Button from "@mui/material/Button";

const ButtonDiv = (props) => (
  <Button
    // variant="contained"
    style={{
      background: "#C7BEBE",
      borderRadius: "2px",
      marginLeft: "48px",
      marginTop: "5px",
      width: 112,
      // height: 35,
      float: "right",
    }}
  >
    <span style={{ fontSize: "10px", color: "#000" }}>{props.value}</span>
  </Button>
);
export default function SmallFeedCard(props) {
  return (
    <div
      className="inner"
      style={{
        border:
          props.data.status == "Following"
            ? "1px solid rgb(20, 103, 246)"
            : "#fff",
      }}
    >
      <div>
        <div
          style={{
            float: "left",
            fontSize: 12,
            marginLeft: 8,
            marginTop: 2,
            marginBottom: 1,
            color:
              props.data.status == "Following" || props.data.status == "Post"
                ? "#1376C1"
                : "#F61414",
          }}
        >
          {props.data.status}
        </div>
        {props.data.click != "" ? (
          <div
            style={{
              float: "right",
              marginRight: "5px",
              marginTop: 2,
              marginBottom: 1,
              fontWeight: 600,
              fontSize: "12px",
              opacity: 0.8,
            }}
          >
            {props.data.currency}
          </div>
        ) : (
          <></>
        )}
      </div>
      <br />
      <div style={{ marginBottom: "15px" }}>
        <img
          src={props.data.image}
          alt="new"
          style={{
            width: "20px",
            height: "20px",
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
          <br />
          {props.data.click != "" ? (
            <ButtonDiv value={props.data.click} />
          ) : (
            <></>
          )}

          {/* <span
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
          </span> */}
        </span>
      </div>
    </div>
  );
}

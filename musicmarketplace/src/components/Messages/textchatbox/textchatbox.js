import React from "react";
import "./textchatbox.css";

export default function textchatbox(props) {
  return (
    <div
      style={{
        backgroundColor: "rgb(249, 249, 249)",
        float: props.nature == "sent" ? "right" : "left",

        marginLeft: "10px",
        marginRight: "10px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {props.nature == "rcvd" ? (
        <>
          <img className="imgscb" src={props.src}></img>
          <small
            style={{
              position: "absolute",
              marginTop: "38px",
              fontWeight: 300,
              color: "#0",
              letterSpacing: "-0.5px",
            }}
          >
            {props.time}
          </small>
        </>
      ) : (
        <></>
      )}

      <div className="textboxcb">{props.text}</div>
      {props.nature == "sent" ? (
        <div>
          <img className="imgscb" src={props.src}></img>
          <br />
          <small
            style={{
              position: "absolute",
              fontWeight: 300,
              color: "#0",
              letterSpacing: "-0.5px",
            }}
          >
            <br />
            {/* {props.time} */}
          </small>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

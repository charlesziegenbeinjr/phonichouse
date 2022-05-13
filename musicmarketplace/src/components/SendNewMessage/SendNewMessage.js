import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
export default function SendNewMessage() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 27,
        width: "200px",
        height: "40px",
        textAlign: "center",

        backgroundColor: "#0F123",
        opacity: 0.9,

        marginLeft: "20px",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginLeft: 10 }}>
          <BiMessageSquareAdd color={"green"} size={30} />
        </div>
        <span style={{ marginLeft: 5 }}>Send a New Message</span>
      </div>
    </div>
  );
}

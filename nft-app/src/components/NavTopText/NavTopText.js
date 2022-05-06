import React from "react";

export default function NavTopText() {
  return (
    <>
      <li>
        <span
          style={{
            fontSize: 16,
            marginTop: 40,
            color: "#ff6347",
            fontWeight: "bold",
            marginLeft: "-15px",
          }}
        >
          phonic
          <span
            style={{
              color: "#fff0f5",
            }}
          >
            house
          </span>
        </span>
      </li>

      <br />
      <li>
        <span
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: "-15px",
          }}
        >
          Auser Xample
        </span>
      </li>
      <li
        style={{
          marginTop: 5,
        }}
      >
        <span
          style={{
            color: "#fff0f5",
            fontSize: 16,
            marginTop: 200,
            marginLeft: "-15px",
          }}
        >
          @Sampletan
        </span>
      </li>
    </>
  );
}

import React from "react";
import "./StartInvesting.css";
import BarGraph from "../BarGraph/BarGraph";
import {Link} from "react-router-dom";
const Text = () => (
  <span
    style={{
      fontSize: 13,
      fontStyle: "Italic",
      color: "#1b2566",
    }}
  >
    Current Position: 0 shares
  </span>
);

const Slider = () => (
  <div id="slider">
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "30px",
        height: "23px",
        borderRadius: "40px",
        backgroundColor: "black",
        marginTop: "90px",
        opacity: 0.5,
      }}
    ></div>
  </div>
);

const NameAndPrice = () => (
  <span
    style={{
      fontSize: 15,
      fontStyle: "normal",
      color: "#000",
      fontWeight: "bold",
    }}
  >
    Artist :<span style={{ marginLeft: "8px", color: "#1b2566" }}>NEWRT</span>
    <span style={{ marginLeft: "65px" }}>$42.27</span>
  </span>
);

const Details = () => (
  <div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontSize: 14,
        marginTop: "20px",
      }}
    >
      <span style={{ opacity: 0.6 }}> Market Cop: 3,961,823</span>
      <span style={{ opacity: 0.9, marginLeft: "50px", color: "green" }}>
        +0.86%
      </span>
      <span style={{ opacity: 1, fontWeight: "bold", marginLeft: "5px" }}>
        Today
      </span>
      <span
        style={{
          opacity: 1,
          marginLeft: "50px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Bid:
      </span>
      <span style={{ opacity: 0.8, marginLeft: "5px" }}> $961,823</span>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontSize: 14,
        marginTop: "14px",
      }}
    >
      <span style={{ opacity: 0.6 }}> Volume: 35,823</span>
      <span style={{ opacity: 0.9, marginLeft: "95px", color: "green" }}>
        +7.23%
      </span>
      <span style={{ opacity: 1, fontWeight: "bold", marginLeft: "5px" }}>
        YTD
      </span>
      <span
        style={{
          opacity: 1,
          marginLeft: "60px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Ask:
      </span>
      <span style={{ opacity: 0.8, marginLeft: "5px" }}> $961</span>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontSize: 14,
        marginTop: "14px",
      }}
    >
      <span style={{ opacity: 0.6, fontWeight: "bold" }}> Open: $42.1B</span>
      <span
        style={{
          opacity: 0.9,
          marginLeft: "50px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Earnings Date:
      </span>
      <span style={{ opacity: 1, fontWeight: "bold", marginLeft: "5px" }}>
        Oct 10
      </span>
      <span
        style={{
          opacity: 1,
          marginLeft: "50px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Shares Outstanding:
      </span>
      <span style={{ opacity: 0.8, marginLeft: "5px", fontWeight: "bold" }}>
        $100,000
      </span>
    </div>
  </div>
);

export default function StartInvesting() {
  return (
    <div className="StartInvestingParentDiv">
      <Link to="/confirmOrder">
      <div id="SI-ButtonAndText">
        <button id="StartInvestingButton">Start Investing</button>
        <br />
        <Text />
      </div>
      </Link>
      <div id="SI-CardContent">
        <NameAndPrice />
        <Details />
      </div>

      <BarGraph />

      <div id="SI-SliderDiv">
        <span
          style={{
            marginLeft: 20,
            fontSize: 13,
            fontWeight: "bold",
          }}
        >
          52 Week Range
        </span>
        <br />
        <br />

        <div id="sliderDivInside">
          <Slider />
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "5px",
              fontSize: "12px",
              fontWeight: "light",
            }}
          >
            Current:
            <span style={{ marginLeft: "6px", fontWeight: "bold" }}>
              {" "}
              $42.27
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./AddETFShares.css";
import SharesTable from "../SharesTable/SharesTable";
import {Link} from "react-router-dom";
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
    </div>
  </div>
);
const Slider = () => (
  <div id="AddETF-slider">
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

export default function AddETFShares() {
  return (
    <div className="AddETFParentDiv">
      <Link to="/confirmOrder">
      <div id="AddETF-ButtonAndText">
        <button id="AddETFButton">Add ETF Shares</button>
        <br />
        <Text />
      </div>
      </Link>

      <div id="AddETF-CardContent">
        <NameAndPrice />
        <Details />
      </div>

      <div id="SharesTable">
        <SharesTable />
      </div>

      <div id="AddETF-SliderDiv">
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
        <div id="Add-ETFsliderDivInside">
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

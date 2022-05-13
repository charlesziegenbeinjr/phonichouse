import React from "react";
import "./uploadcomponents.css";

export default function UploadComponents() {
  return (
    <div className="maindivuc">
      <div className="innderdivuc">
        <div style={{ width: "150px", height: "150px" }}>
          <div className="rounduc">Open Artist Inquity</div>
        </div>
        <div style={{ width: "150px", height: "150px" }}>
          <div className="rounduc">Create Group</div>
        </div>
      </div>
      <div
        style={{
          marginTop: 31,
          marginLeft: "130px",
          marginRight: "130px",
          //   textAlign: "middle",
          borderLeft: "2px solid #081041",
          height: "100px",
        }}
      ></div>
      <div className="innderdivuc">
        <div style={{ width: "150px", height: "150px" }}>
          <div className="rounduc">Upload A File</div>
        </div>
        <div style={{ width: "150px", height: "150px" }}>
          <div className="rounduc">Share Music</div>
        </div>
      </div>
    </div>
  );
}

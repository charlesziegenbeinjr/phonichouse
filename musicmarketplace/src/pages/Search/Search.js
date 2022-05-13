import React from "react";
import TopNavBar from "../../components/TopNavbar/TopNavBar";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import DropDown from "../../components/DropDown/DropDown";
import GraphCard from "../../components/graphCard/graphCard";
import { Link } from "react-router-dom";

import "./Search.css";
export default function Search() {
  return (
    <>
      <TopNavBar />

      <div className="ContainerForDropDowns">
        <div style={{ width: 160 }}>
          <DropDown title="Genre" options = "0" />
        </div>
        <div style={{ width: 160, marginLeft: 200 }}>
          <DropDown title="Date Listed" options = "3" />
        </div>
        <div style={{ width: 160, marginLeft: 200 }}>
          <DropDown title="Market Cap" options = "6" />
        </div>
      </div>

      <div className="ContainerForDropDowns">
        <div style={{ width: 160 }}>
          <DropDown title="Today's % Change" options = "1" />
        </div>
        <div style={{ width: 160, marginLeft: 200 }}>
          <DropDown title="% Change YTD" options = "4" />
        </div>
        <div style={{ width: 160, marginLeft: 200 }}>
          <DropDown title="Dividend Yield (%)" options = "7"/>
        </div>
      </div>

      <div className="ContainerForDropDowns">
        <div style={{ width: 160 }}>
          <DropDown title="Total Streams" options = "2"/>
        </div>
        <div style={{ width: 160, marginLeft: 200 }}>
          <DropDown title="Streams this Year" options = "5"/>
        </div>
        <div style={{ width: 160, marginLeft: 200 }}>
          <DropDown title="Ticker, Keyword, etc." options = "8"/>
        </div>
      </div>
      <br />

      <div className="containerBelowCards">
        <Link to="/existingArtist">
          <GraphCard
            color="#FFE633"
            txtColor="#01FE5E"
            title="RB 500"
            delta="+4.08 (64%)"
          />
        </Link>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist">
          <GraphCard
            color="#01FE5E"
            txtColor="#01FE5E"
            title="Hip-Hop 30"
            delta="+1.22 (29%)"
          />
        </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist">
          <GraphCard
            color="#FE31F7"
            txtColor="#01FE5E"
            title="Pop 2000"
            delta="+1.07 (15%)"
          />
        </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist">
          <GraphCard
            color="#12D7FE"
            txtColor="#FE1212"
            title="Rock 100"
            delta="-0.27 (8%)"
          />
        </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist">
          <GraphCard
            color="#FFE633"
            txtColor="#01FE5E"
            title="RB 500"
            delta="+4.08 (64%)"
          />
        </Link>
        </div>
      </div>

      <div className="containerBelowCards">
        <div>
        <Link to="/existingArtist">
          <GraphCard
            color="#FFE633"
            txtColor="#01FE5E"
            title="RB 500"
            delta="+4.08 (64%)"
          />
        </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist">
          <GraphCard
            color="#01FE5E"
            txtColor="#01FE5E"
            title="Hip-Hop 30"
            delta="+1.22 (29%)"
          />
        </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist">
          <GraphCard
            color="#FE31F7"
            txtColor="#01FE5E"
            title="Pop 2000"
            delta="+1.07 (15%)"
          />
        </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist">
          <GraphCard
            color="#12D7FE"
            txtColor="#FE1212"
            title="Rock 100"
            delta="-0.27 (8%)"
          />
        </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist">
          <GraphCard
            color="#FFE633"
            txtColor="#01FE5E"
            title="RB 500"
            delta="+4.08 (64%)"
          />
        </Link>
        </div>
      </div>

      <div className="containerBelowCards">
        <div>
        <Link to="/existingArtist">
          <GraphCard
            color="#FFE633"
            txtColor="#01FE5E"
            title="RB 500"
            delta="+4.08 (64%)"
          />
        </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist">
          <GraphCard
            color="#01FE5E"
            txtColor="#01FE5E"
            title="Hip-Hop 30"
            delta="+1.22 (29%)"
          />
        </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist">
          <GraphCard
            color="#FE31F7"
            txtColor="#01FE5E"
            title="Pop 2000"
            delta="+1.07 (15%)"
          />
        </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist">
          <GraphCard
            color="#12D7FE"
            txtColor="#FE1212"
            title="Rock 100"
            delta="-0.27 (8%)"
          />
        </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist">
          <GraphCard
            color="#FFE633"
            txtColor="#01FE5E"
            title="RB 500"
            delta="+4.08 (64%)"
          />
        </Link>
        </div>
      </div>

      <SideNavbar />
    </>
  );
}

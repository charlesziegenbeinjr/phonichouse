import React, { useState } from "react";
import "./Home.css";
import Graph from "../../components/graph/graph";
import GraphCard from "../../components/graphCard/graphCard";
import TopNavBar from "../../components/TopNavbar/TopNavBar";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import InvestmentTable from "../../components/table/investments/investmenttable";
import Feed from "../../components/Feed/Feed";
import BasicTable from "../../components/NewListedArtists/NewListedArtists";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div class = "backg">
      <TopNavBar />
      <div style={{display: "flex", flex: "row"}}>
      <div>
      <div id="containerTopCards" style={{ marginTop: 20, marginLeft: 265 }}>
        <div>
          <Link to="/existingArtist" style={{color: "black" , textDecoration: 'none' }}>
            <GraphCard
              color="#FFE633"
              txtColor="#01FE5E"
              title="RB 500"
              delta="+4.08 (64%)"
            />
          </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist" style={{color: "black" , textDecoration: 'none' }}>
          <GraphCard
            color="#01FE5E"
            txtColor="#01FE5E"
            title="Hip-Hop 30"
            delta="+1.22 (29%)"
          />
          </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist" style={{color: "black" , textDecoration: 'none' }}>
          <GraphCard
            color="#FE31F7"
            txtColor="#01FE5E"
            title="Pop 2000"
            delta="+1.07 (15%)"
          />
          </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist" style={{color: "black" , textDecoration: 'none' }}>
          <GraphCard
            color="#12D7FE"
            txtColor="#FE1212"
            title="Rock 100"
            delta="-0.27 (8%)"
          />
          </Link>
        </div>
        <div style={{ marginLeft: 20 }}>
        <Link to="/existingArtist" style={{color: "black" , textDecoration: 'none' }}>
          <GraphCard
            color="#12D7FE"
            txtColor="#FE1212"
            title="Rock 100"
            delta="-0.27 (8%)"
          />
          </Link>
        </div>
      </div>
      <div style={{ marginLeft: 265, marginTop: 40 }}>
        <Graph />
      </div>

      <div
        style={{
          marginLeft: "255px",
          borderRadius: "20px",
          marginTop: 40,

          // marginTop: "10px",
          // width: 1035,
          // display: "flex",
          // flexDirection: "unset",
        }}
      >
        <InvestmentTable />
        {/* <div style={{ display:"flex", flexDirection:"column"}}>
        <TopGainerTable/>
        </div> */}

        {/* <div style={{marginTop: 200}}>
        <NewList/>

        </div> */}
      </div>
      </div>
      <div style={{marginTop: 10}}>
        <div class="feedHome">
          <Feed />
        </div>
        <div style={{marginTop: 30, marginLeft:80}}>
          <BasicTable />
        </div>
      </div>
      </div>
      <SideNavbar />
    </div>
  );
}

export default Home;

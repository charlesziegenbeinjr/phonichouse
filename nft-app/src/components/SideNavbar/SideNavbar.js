import React from "react";
import { IconContext } from "react-icons";
import HeaderText from "../NavTopText/NavTopText";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import ChatOnNavbar from "../ChatOnNavbar/ChatOnNavbar";
export default function SideNavbar(props) {
  return (
    <IconContext.Provider value={{ color: "#ffff" }}>
      <nav className={"nav-menu"}>
        <ul>
          <HeaderText />
        </ul>
        <br />
        {SidebarData.map((item, index) => {
          return (
            <span key={index} className={item.cName}>
              <Link to={item.path}>
                <span
                  style={{
                    marginLeft: 20,
                    marginRight: 16,
                  }}
                >
                  {item.icon}
                </span>
                <span style={{ marginTop: 80, marginRight: 10 }}>
                  {item.title}
                </span>
              </Link>
            </span>
          );
        })}
        <ChatOnNavbar />
      </nav>
    </IconContext.Provider>
  );
}

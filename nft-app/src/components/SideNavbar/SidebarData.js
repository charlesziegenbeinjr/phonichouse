import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GoIcons from "react-icons/go";
import * as MdIcons from "react-icons/md";
import { ImBlocked } from "react-icons/im";
import { ImHome3 } from "react-icons/im";
import { ImSearch } from "react-icons/im";
import { BsGearWideConnected } from "react-icons/bs";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <ImHome3 />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <ImSearch />,
    cName: "nav-text",
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <MdIcons.MdExplore />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Connect",
    path: "/connect",
    icon: <BsGearWideConnected />,
    cName: "nav-text",
  },
];

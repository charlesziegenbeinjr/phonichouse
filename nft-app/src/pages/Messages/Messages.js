import React from "react";
import TopNavBar from "../../components/TopNavbar/TopNavBar";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import MessageSide from "../../components/Messages/side/messageside";
import MainChat from "../../components/Messages/mainchat/mainchat";
import { styled } from "@mui/system";
import InputUnstyled from "@mui/base/InputUnstyled";
import SendNewMessage from "../../components/SendNewMessage/SendNewMessage";
import UploadComponent from "../../components/Messages/uploadcomponents/uploadcomponents";
import "./Messages.css";

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});
const StyledInputElement = styled("input")`
  width: 180px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 0.2375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 200px;
    transition: width 200ms ease-out;
  }
`;

export default function Messages() {
  return (
    <>
      <TopNavBar />
      <div
        className="MessageContainer"
        style={{ display: "flex", flexDirection: "row", marginTop: "20px", marginLeft: 500 }}
      >
        <div style={{ marginRight: "20px" }}>
          <div style={{ marginLeft: "20px", marginTop: "4px" }}>
            <CustomInput aria-label="Demo input" placeholder="Search" />
          </div>
          {/* <SendNewMessage /> */}
          <div style={{ marginTop: "40px" }}>
            <MessageSide />
          </div>
        </div>
        <MainChat
          status="Online"
          name="Kanye East"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEcVoNaAvb7SUBGVZwsHIzbu9ly34q_INRg&usqp=CAU"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "500px",
          marginTop: "20px",
        }}
      >
        <UploadComponent />
      </div>

      <SideNavbar />
    </>
  );
}

import "./mainchat.css";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TextChatBox from "../textchatbox/textchatbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { IoSend } from "react-icons/io5";
import { IconContext } from "react-icons";
import InputUnstyled from "@mui/base/InputUnstyled";
const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});

const options = ["None", "Atria", "Callisto", "Dione", "Ganymede"];
const StyledInputElement = styled("input")`
  width: 300px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
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
    width: 400px;
    transition: width 200ms ease-out;
  }
`;

const Messages = [
  {
    time: "11:30pm",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEcVoNaAvb7SUBGVZwsHIzbu9ly34q_INRg&usqp=CAU",
    text: "Hello I was hoping to see an update from your side. Are you available?",
    nature: "rcvd",
  },
  {
    time: "11:30pm",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEcVoNaAvb7SUBGVZwsHIzbu9ly34q_INRg&usqp=CAU",
    text: "The design was absolutely amazing. It was fun working for you.",
    nature: "rcvd",
  },
  {
    time: "11:30pm",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEcVoNaAvb7SUBGVZwsHIzbu9ly34q_INRg&usqp=CAU",
    text: "You price is fine.",
    nature: "rcvd",
  },
  {
    time: "11:30pm",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEcVoNaAvb7SUBGVZwsHIzbu9ly34q_INRg&usqp=CAU",
    text: "Thanks for acknowledgement bro.",
    nature: "sent",
  },
  // {
  //   time: "11:30pm",
  //   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEcVoNaAvb7SUBGVZwsHIzbu9ly34q_INRg&usqp=CAU",
  //   text: "Will work harder next time.",
  //   nature: "sent",
  // },
];

const ITEM_HEIGHT = 48;

function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "absolute",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "100px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "10px",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
    },
  },
}));

function SearchAppBar() {
  return (
    <Search>
      <StyledInputBase
        placeholder="Find something within conversation ..."
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}

export default function mainchat(props) {
  return (
    <div className="maindiv">
      <img className="img" src={props.src}></img>
      <strong
        style={{
          position: "absolute",
          marginLeft: 67,
          marginTop: 17,
          fontWeight: 500,
          color: "#081041",
        }}
      >
        {props.name}
      </strong>
      <small
        style={{
          position: "absolute",
          marginLeft: 67,
          marginTop: 38,
          fontWeight: 600,
          color: "#3faf45",
          letterSpacing: "-0.5px",
        }}
      >
        {props.status}
      </small>
      <div
        style={{ position: "absolute", marginLeft: 570, marginTop: 7 }}
        className="MoreVertIcon"
      >
        <LongMenu />
      </div>
      {/* <div
        style={{
          position: "fixed",
          marginLeft: -110,
          marginTop: 50,
        }}
      >
        <div
          style={{
            // position: "absolute",
            marginLeft: 170,
            marginTop: 27.5,
            zIndex: 1,
          }}
        >
          <SearchAppBar />
        </div>
        <div
          style={{
            // position: "absolute",
            borderRadius: 40,
            border: "1px solid #08410b",
            marginLeft: 170,
            marginTop: 30,
            height: 30,
            width: 500,
            backgroundColor: "#0",
            // backgroundColor: "blue",
          }}
        >
          <SearchIconWrapper style={{ position: "absolute" }}>
            <SearchIcon />
          </SearchIconWrapper>
        </div>
      </div> */}

      <div
        style={{
          marginTop: 100,
          backgroundColor: "#F9F9F9",
          height: "370px",
        }}
      >
        {Messages.map((item, index) => {
          return (
            <>
              <TextChatBox
                time={item.time}
                src={item.src}
                text={item.text}
                nature={item.nature}
              />
              <br />
              <br />
              <br />
              <br />
            </>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 50,
          // backgroundColor: "red",
          height: "40px",
          marginLeft: "60px",
        }}
      >
        <CustomInput aria-label="Demo input" placeholder="Write a message..." />
        <Button
          variant="contained"
          style={{
            backgroundColor: "#081041",
            borderRadius: "80px",
            marginLeft: "5px",
            width: 20,
          }}
        >
          <IconContext.Provider value={{}}>
            <IoSend size={20} />
          </IconContext.Provider>
        </Button>
      </div>
    </div>
  );
}

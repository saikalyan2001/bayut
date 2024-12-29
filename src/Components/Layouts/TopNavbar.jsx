import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TopNavlink from "../ReusableComponents/TopNavlink";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CustomCard from "../ReusableComponents/Customcard";
import SettingsMenu from "../ReusableComponents/SettingsMenu";
import LoginForm from "../ReusableComponents/LoginForm";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Menudrawer from "../Mobile/Menudrawer";

export default function TopNavbar({}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [isFav, setIsFav] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };



  const [anchorEl, setAnchorEl] = React.useState(null);

  const LeftNavlinks = [
    { id: 1, icon: <LanguageIcon sx={{ fontSize: 20 }} />, label: "EN" },
    {
      id: 2,
      icon: <SettingsIcon sx={{ fontSize: 18 }} />,
      label: "Site settings",
    },
  ];

  const RightNavlinks = [
    {
      id: 3,
      icon: <FavoriteIcon sx={{ fontSize: 18 }} />,
      label: "Favourite properties",
      count: "(0)",
    },
    {
      id: 4,
      icon: <StarIcon sx={{ fontSize: 18 }} />,
      label: "Saved searches",
      count: "(0)",
    },
    {
      id: 5,
      icon: <AccountCircleIcon sx={{ fontSize: 18, color: "green" }} />,
      label: "Login",
    },
  ];


  const buttonData = [
    { id: 1, icon: <GoogleIcon />, label: "Login with Google" },
    { id: 2, icon: <FacebookIcon />, label: "Login with Facebook" },
    { id: 3, icon: <InsertLinkIcon />, label: "Login with one-time link" },
  ];

  const buttonData2 = [
    { id: 4, icon: <MailOutlineIcon />, label: "Login with Email" },
  ];

  const buttonData3 = [
    { id: 1, icon: <GoogleIcon />, label: "Login with Google" },
    { id: 2, icon: <FacebookIcon />, label: "Login with Facebook" },
  ];

  return (
    <Box>
      <AppBar position="static" className="bg-gray-100 shadow-none">
        <Toolbar className="flex justify-between items-center mx-2 lg:mx-20 p-0 text-gray-600">
          <div className="flex gap-10 items-center order-3 sm:order-none">
            {LeftNavlinks.map((navlink, index) => (
              <TopNavlink
                key={index}
                {...navlink}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
              />
            ))}
          </div>
          <div className="hidden sm:flex gap-10 items-center">
            {RightNavlinks.map((navlink, index) => (
              <TopNavlink key={index} {...navlink} isLogin={isLogin} setIsLogin={setIsLogin} isFav={isFav} setIsFav={setIsFav} />
            ))}
          </div>
          
          <div className="sm:hidden order-1 hover:text-green-700" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </div>

          <div className="w-28 order-2 sm:hidden">
            <img
              src="https://www.iloveseo.net/wp-content/uploads/2020/03/bayut-logo.png"
              alt=""
            />
          </div>
          
        </Toolbar>
      </AppBar>
      {isOpen && <CustomCard isOpen={isOpen} setIsOpen={setIsOpen} />}
      {anchorEl && (
        <SettingsMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      )}

      {isLogin && <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} buttonData={buttonData} buttonData2={buttonData2} />}
      {isLogin && <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} buttonData={buttonData} buttonData2={buttonData2} />}
      {isFav && <LoginForm isFav={isFav} setIsFav={setIsFav} buttonData3={buttonData3} buttonData2={buttonData2} />}
      {open && <Menudrawer open={open} setOpen={setOpen} />}
    </Box>
  );
}

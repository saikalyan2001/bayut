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
import MenubarCard from "../ReusableComponents/MenubarCard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function MenuNavbar() {
  const RightNavlinks = [
    {
      id: 1,
      label: "Find my Agent",
    },
    {
      id: 2,
      label: "Floor Plans",
    },
    {
      id: 3,
      label: (
        <MenubarCard
          label="Guides"
          items={[
            {
              one: "Area Guides",
              two: "Building Guides",
              three: "School Guides",
            },
          ]}
        />
      ),
      icon1: <ArrowDropDownIcon />,
      icon2: <ArrowDropUpIcon />,
    },
    {
      id: 4,
      label: (
        <MenubarCard
          label="Market Intelligence"
          items={[
            {
              one: "TruEstimate",
              two: "Property Prices",
              three: "Dubai Transactions",
              four: "Trends",
              five: "New Projects",
            },
          ]}
        />
      ),
      icon1: <ArrowDropDownIcon />,
      icon2: <ArrowDropUpIcon />,
    },
    {
      id: 5,
      label: "Agent Portal",
    },
    {
      id: 6,
      label: (
        <MenubarCard
          label="Events"
          items={[
            {
              one: "Bayut Awards 2023",
              two: "B3DXB 2022",
              three: "Your Home Your Choice",
            },
          ]}
        />
      ),
      icon1: <ArrowDropDownIcon />,
      icon2: <ArrowDropUpIcon />,
    },
  ];

  return (
    <Box>
      <AppBar position="static" className="bg-white shadow-none mt-2">
        <Toolbar className="flex justify-between items-center mx-2 lg:mx-20 p-0 text-gray-600">
          <div className="w-28 hidden sm:block">
            <img
              src="https://www.iloveseo.net/wp-content/uploads/2020/03/bayut-logo.png"
              alt=""
            />
          </div>

          <div className="hidden sm:flex items-center">
            <div className="w-20 mr-3">
              <img
                src="https://www.bayut.com/assets/my_bayut_en.7ee635d3a2af2677c2d96a821bf33639.png"
                alt=""
              />
            </div>
            {RightNavlinks.map((navlink, index) => (
              <TopNavlink key={index} {...navlink} />
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

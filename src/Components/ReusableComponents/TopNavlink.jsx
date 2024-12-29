import React, { useState } from "react";
import Typography from "@mui/material/Typography";

const TopNavlink = ({
  id,
  icon,
  label,
  count,
  isOpen,
  setIsOpen,
  setAnchorEl,
  isLogin,
  setIsLogin,
  isFav,
  setIsFav,
}) => {



  const handleClick = (e) => {
    e.preventDefault();

    if (id === 1) {
      setIsOpen(!isOpen);
    }

    if (id === 2) {
      setAnchorEl(e.currentTarget);
    }

    if (id === 5 || id === 4) {
      setIsLogin(!isLogin);
    }

    if (id === 3) {
      setIsFav(!isFav);
    }
  };

  return (
    <div
      className={`${
        id !== 1 ? "hidden" : "flex"
      } sm:flex gap-2 items-center hover:text-green-700 cursor-pointer`}
      onClick={(e) => handleClick(e)}
    >
      <a href="" className="inline-flex items-center">
        {icon}
      </a>
      <div
        className={`inline-flex items-center ${
          id === 3 || id === 4 ? "hidden md:block" : ""
        }`}
      >
        <Typography
          variant="body1"
          component="h2"
          className={`text-sm ${
            label === "Login" ? "text-green-700" : ""
          } flex gap items-center`}
        >
          {label}
        </Typography>
      </div>
      <a href="" className="text-sm">
        {count}
      </a>
    </div>
  );
};

export default TopNavlink;

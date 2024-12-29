import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function MenubarCard({ label, items }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log("items", items);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="normal-case text-gray-600"
      >
        {label}
        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        >
        {items &&
          items.map((item) => (
            <>
              <MenuItem onClick={handleClose} >{item.one}</MenuItem>
              <MenuItem onClick={handleClose}>{item.two}</MenuItem>
              <MenuItem onClick={handleClose}>{item.three}</MenuItem>
              <MenuItem onClick={handleClose}>{item.four}</MenuItem>
              <MenuItem onClick={handleClose}>{item.five}</MenuItem>
            </>
          ))}
      </Menu>
    </div>
  );
}

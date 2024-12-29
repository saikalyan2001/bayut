import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsCustomCard from "./SettingsCustomCard";

const SettingsMenu = ({ anchorEl, setAnchorEl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArea, setIsArea] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const data = [{ id: 1, title: "Change Currency" }];
  const Areadata = [{ id: 2, title: "Change Area" }];

  const open = Boolean(anchorEl);

  const handleClose = (type) => {
    if (type === "currency") {
      setIsOpen(!isOpen);
      setIsMenu(!isMenu);
      // setAnchorEl(null);
    }
    if (type === "units") {
      setIsArea(!isArea);
      setIsMenu(!isMenu);
      // setAnchorEl(null);
    }
  };

  return (
    <>
      {!isMenu && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => handleClose("currency")}
            sx={{ fontSize: 14 }}
          >
            Change Currency
          </MenuItem>
          <MenuItem onClick={() => handleClose("units")} sx={{ fontSize: 14 }}>
            Change Area Unit
          </MenuItem>
        </Menu>
      )}

      {isOpen && (
        <SettingsCustomCard
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isMenu={isMenu}
          setIsMenu={setIsMenu}
          data={data}
        />
      )}

      {isArea && (
        <SettingsCustomCard
          isArea={isArea}
          setIsArea={setIsArea}
          isMenu={isMenu}
          setIsMenu={setIsMenu}
          Areadata={Areadata}
        />
      )}
    </>
  );
};

export default SettingsMenu;

import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({id, icon, label}) => {
  return (
    <div className="w-full">
      <Button variant="outlined" startIcon={icon} className="w-full py-3 px-6 normal-case">
        {label}
      </Button>
    </div>
  );
};

export default CustomButton;

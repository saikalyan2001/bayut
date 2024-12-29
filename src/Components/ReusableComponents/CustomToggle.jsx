import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CustomToggle = ({ id, language, alignment, setAlignment }) => {



  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value={language} className="rounded-full normal-case">
        {language}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CustomToggle;

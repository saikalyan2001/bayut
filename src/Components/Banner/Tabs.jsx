import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <AppBar
        position="static"
        className="bg-white text-black w-fit rounded-lg p-2"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none", // Hide the indicator
            },
          }}
        >
          <Tab
            label="Properties"
            className={`opacity-100 normal-case ${
              value === 0
                ? "text-green-600 bg-green-100 font-semibold rounded-lg"
                : ""
            }`}
            {...a11yProps(0)}
          />
          <Tab
            label="New Projects"
            className={`opacity-100 normal-case  whitespace-nowrap ${
              value === 1
                ? "text-green-600 bg-green-100 font-semibold rounded-lg"
                : ""
            }`}
            {...a11yProps(1)}
          />
          <Tab
            label="Transactions"
            className={`opacity-100 normal-case ${
              value === 2
                ? "text-green-600 bg-green-100 font-semibold rounded-lg"
                : ""
            }`}
            {...a11yProps(2)}
          />
          <Tab
            label={
              <span>
                Tru<span style={{ fontWeight: "bold" }}>Estimate</span> <sup>TM</sup>
              </span>
            }
            className={`opacity-100 normal-case whitespace-nowrap ${
              value === 3
                ? "text-green-600 bg-green-100 font-semibold rounded-lg"
                : ""
            }`}
            {...a11yProps(3)}
          />
          <Tab
            label="Agents"
            className={`opacity-100 normal-case ${
              value === 4
                ? "text-green-600 bg-green-100 font-semibold rounded-lg"
                : ""
            }`}
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
    </Box>
  );
}

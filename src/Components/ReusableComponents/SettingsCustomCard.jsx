import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomToggle from "./CustomToggle";
import CloseIcon from "@mui/icons-material/Close";
import Countries from "../Countries";

export default function SettingsCustomCard({
  isOpen,
  setIsOpen,
  isMenu,
  setIsMenu,
  isArea,
  setIsArea,
  data,
  Areadata,
}) {
  const [alignment, setAlignment] = React.useState("");

  console.log("data:", data);
  console.log("Areadata:", Areadata);

  const handleClose = (id) => {
    if (id === 1) {
      setIsOpen(!isOpen);
    }
    if (id === 2) {
      setIsArea(!isArea);
    }
  };
  
  const handleModal = (id) => {
    if (id === 1) {
      setIsOpen(!isOpen);
    }
    if (id === 2) {
      setIsArea(!isArea);
    }
  };



  const Languages = [
    { id: 1, language: "English" },
    { id: 2, language: "Arabic" },
    { id: 3, language: "Telugu" },
    { id: 4, language: "Hindi" },
  ];

  return (
    <>
      <div
        className="bg-black opacity-80 fixed inset-0 z-10"
        onClick={() => handleModal(data ? 1 : 2)}
        ></div>
      <Card
        sx={{ maxWidth: 345 }}
        className=" p-4 space-y-3  z-50 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
      >
        <CardContent className="flex justify-between ml-20">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-lg font-semibold text-center"
          >
            {(data && data[0].title) || (Areadata && Areadata[0].title)}
          </Typography>
          <div
            className="float-right cursor-pointer"
            onClick={() => handleClose(data ? 1 : 2)}
          >
            <CloseIcon />
          </div>
        </CardContent>

        <div>
          <Countries />
        </div>

        <CardActions className="">
          <Button variant="contained" className="normal-case w-full">
            SAVE
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

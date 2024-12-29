import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomToggle from "./CustomToggle";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomCard({ isOpen, setIsOpen }) {
  const [alignment, setAlignment] = React.useState("");

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
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <Card
        sx={{ maxWidth: 345 }}
        className="m-10 p-4 space-y-3 mx-auto z-50 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
      >
        <div
          className="float-right cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CloseIcon />
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-lg font-semibold text-center m-0 "
          >
            Select your preferred language{" "}
          </Typography>
        </CardContent>
        <div className="space-x-3 text-center">
          {Languages.map((data) => (
            <CustomToggle
              key={data.id}
              {...data}
              alignment={alignment}
              setAlignment={setAlignment}
            />
          ))}
        </div>
        <CardActions className="flex items-center justify-center">
          <Button variant="contained" className="normal-case w-full">
            Apply
          </Button>
          <Button
            variant="outlined"
            className="normal-case w-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

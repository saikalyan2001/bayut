import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomToggle from "./CustomToggle";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "./CustomButton";



export default function LoginForm({ isLogin, setIsLogin, isFav, setIsFav, buttonData, buttonData2, buttonData3 }) {
  const [alignment, setAlignment] = React.useState("");

  const handleModal = () => {
    if(isLogin) {
        setIsLogin(!isLogin);
    }

    if(isFav) {
        setIsFav(!isFav);
    }
  }


  return (
    <>
      <div
        className="bg-black opacity-80 fixed inset-0 z-10"
        onClick={handleModal}
      ></div>
      <Card
        sx={{ maxWidth: 345 }}
        className=" p-4 space-y-3  z-50 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center"
      >
        <div
          className="float-right cursor-pointer"
          onClick={handleModal}
        >
          <CloseIcon />
        </div>
        <div>bayut</div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-lg font-semibold text-center m-0 "
          >
            Login into your Bayut account{" "}
          </Typography>
        </CardContent>

        <CardActions className="flex flex-col gap-2 items-center justify-center">
          {(buttonData || buttonData3).map((data) => (
            <CustomButton {...data} />
          ))}
        </CardActions>

        <div>OR</div>
        <CardActions className="flex flex-col gap-2 items-center justify-center">
          {buttonData2.map((data) => (
            <CustomButton {...data} />
          ))}
        </CardActions>

        <div className="mt-10">
          <a href="#">New to Bayut? Create an account</a>
        </div>
      </Card>
    </>
  );
}

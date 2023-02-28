import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://img.freepik.com/free-vector/flat-man-with-mobile-phone-scanning-qr-code-online-payment-internet-shopping-characters-standing-near-big-smartphone-with-qr-symbol-device-screen-using-scanner-id-app-pay_88138-815.jpg",
  },
  {
    imgPath:
      "https://img.freepik.com/free-vector/flat-people-order-food-online-grocery-shopping-from-mobile-application-internet-purchases-with-home-delivery-from-supermarket-store-smartphone-screen-with-buy-button-basket-full-products_88138-856.jpg?w=2000",
  },
  {
    imgPath:
      "https://media.istockphoto.com/vectors/young-wealthy-man-pays-card-using-mobile-payment-vector-id1066818018?k=20&m=1066818018&s=612x612&w=0&h=jJ17hiwIBZ6H31TNYOBrjtW-aBnOOrLoTXsWtz9XwmE=",
  },
  {
    imgPath:
      "https://img.freepik.com/premium-vector/e-learning-flat-vector-illustration_203633-4317.jpg?w=2000",
  },
];

function BannerSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box style={{ width: "800px", margin: "auto auto" }} sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                style={{ width: "600px", height: "400px" }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  );
}

export default BannerSlider;

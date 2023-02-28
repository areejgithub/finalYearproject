import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container, Typography, Avatar } from "@mui/material";
import BannerSlider from "../Components/BannerSlider";
function HomeFragment() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md" fixed>
      {/* <Box sx={{ maxWidth: { xs: 320, sm: 880 }, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab icon={items()} />
          <Tab icon={items()} />
          <Tab icon={items()} />
          <Tab icon={items()} />
          <Tab icon={items()} />
          <Tab icon={items()} />
          <Tab icon={items()} />
          <Tab icon={items()} />
          <Tab icon={items()} />
          <Tab icon={items()} />
        </Tabs>
      </Box> */}
      <BannerSlider />
    </Container>
  );
}
function items() {
  return (
    <Box>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Typography variant="body2">Title</Typography>
    </Box>
  );
}

export default HomeFragment;

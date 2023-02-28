import * as React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
//import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home } from "@mui/icons-material";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import SummarizeIcon from "@mui/icons-material/Summarize";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import logo2 from "../media/logo2.jpg";
import logout from "../media/logout.jpg";
import loogoo from "../media/loogoo.png";
import HomeFragment from "../fragments/HomeFragment";
import AddProduct from "../fragments/AddProduct";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ViewStock from "../fragments/ViewStock";
import UpdateFrag from "../fragments/UpdateFrag";
import Reports from "../fragments/Reports";
import Feedbacks from "../fragments/Feedbacks";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

// import EditPopup from "../fragments/EditPopup";
const drawerWidth = 240;
const boxstyle = { backgroundColor: "white" };
const Dashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  // const menuitems = [
  //   {
  //     text: "Home",
  //     icon: <Home />,
  //     path: `homefragment`,
  //   },
  //   {
  //     text: "Stock",
  //     icon: <InventoryRoundedIcon />,
  //     path: `addproduct`,
  //   },
  //   {
  //     text: "Reports",
  //     icon: <SummarizeIcon />,
  //     path: `addproduct`,
  //   },
  //   {
  //     text: "Feedback",
  //     icon: <FeedbackRoundedIcon />,
  //     path: `addproduct`,
  //   },
  //   {
  //     text: "Setting",
  //     icon: <SettingsOutlinedIcon />,
  //     path: `addproduct`,
  //   },
  //   {
  //     text: "Logout",
  //     icon: <PowerSettingsNewRoundedIcon />,
  //     path: `addproduct`,
  //   },
  // ];
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box style={boxstyle} sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar style={{ backgroundColor: "Rgb(245,245,220)" }}>
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: "1" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                flexDirection="row"
              >
                <img
                  alt=""
                  src={logo2}
                  height="50px"
                  width="70px"
                  style={{ marginTop: "10px" }}
                />
                <Typography
                  variant="h5"
                  display="inline"
                  style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    paddingBottom: "20px",
                  }}
                >
                  ScanAndPay
                </Typography>
              </Typography>
            </div>
            <div
              style={{ float: "right", marginLeft: "920px", marginTop: "20px" }}
            >
              <IconButton
                style={{
                  float: "right",
                  fontSize: "14px",
                  color: "rgb(60,179,113)",
                  fontWeight: "bolder",
                }}
              >
                <LogoutIcon color="primary" />
                Logout
              </IconButton>
            </div>
          </div>
        </Toolbar>
        <Divider />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",

            backgroundColor: "Rgb(245,245,220)",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {/* <ListItemButton onClick={() => navigate("homefragment")}>
              <ListItemIcon>
                <Home color="primary" />
              </ListItemIcon>
              <ListItemText primary="Home" fontWeight="bold" />
            </ListItemButton> */}
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <InventoryRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Stock" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => navigate("addproduct")}
                >
                  <ListItemIcon>
                    <StarBorder color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Add Product" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => navigate("viewstock")}
                >
                  <ListItemIcon>
                    <StarBorder color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="View Stock" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={() => navigate("report")}>
              <ListItemIcon>
                <SummarizeIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("feedback")}>
              <ListItemIcon>
                <FeedbackRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Feedback" />
            </ListItemButton>
            {/* <ListItemButton>
              <ListItemIcon>
                <SettingsOutlinedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton> */}
            <Divider />
            <ListItemButton onClick={() => navigate("../login")}>
              <ListItemIcon>
                <PowerSettingsNewRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </List>

          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route exact path="homefragment" element={<HomeFragment />}></Route>
          <Route exact path="addproduct" element={<AddProduct />}></Route>
          <Route exact path="viewstock" element={<ViewStock />}></Route>
          <Route exact path="update/:id" element={<UpdateFrag />}></Route>
          <Route exact path="update" element={<UpdateFrag />}></Route>
          <Route exact path="report" element={<Reports />}></Route>
          <Route exact path="feedback" element={<Feedbacks />}></Route>
        </Routes>
        {/* <HomeFragment /> */}
        {/* <BannerSlider /> */}
      </Box>
      {/* <BannerSlider /> */}
    </Box>
  );
};
export default Dashboard;

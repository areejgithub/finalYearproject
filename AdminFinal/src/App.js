import { createTheme, ThemeProvider } from "@mui/material/styles";
//import {purple} from '@mui/material/colors';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(60,179,113)",
    },
  },
});
const App = () => {
  return (
    //  <Login/>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard/*" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;

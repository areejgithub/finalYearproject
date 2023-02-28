import React, { useState, useEffect } from "react";
import db from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>;
function Feedbacks() {
  // const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [stock, setStock] = useState([]);
  const navigate = useNavigate();
  window.swal = swal;
  useEffect(() => {
    const getStock = [];
    const subscriber = db.collection("Feedback").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getStock.push({
          ...doc.data(),
          key: doc.id,
        });
      });

      setStock(getStock);
      setloading(false);
      console.log("feedbacks", getStock);
    });
    return () => subscriber();
  }, []);
  if (loading) {
    return <h1>Loading data from firebase...</h1>;
  }

  return (
    <>
      <h2
        style={{
          margin: "auto",
          textAlign: "center",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        Customer Feedbacks
      </h2>
      <TableContainer
        component={Paper}
        style={{
          width: "700px",
          margin: "auto auto",
          boxShadow: "0px 0px 8px 0px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "rgb(60,179,113)" }}>
            <TableRow>
              <TableCell align="center" width="20px">
                CustomerEmail
              </TableCell>
              <TableCell align="center">Feedback</TableCell>
              {/* <TableCell align="center">TotalPayment</TableCell> */}

              {/* <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Size</TableCell>
              <TableCell align="center">Actions</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "white" }}>
            {stock.length > 0 ? (
              stock.map((data) => (
                <TableRow
                  key={data.key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {data.email}
                  </TableCell>
                  <TableCell align="center">{data.Feedback}</TableCell>
                  {/* <TableCell align="center">{data.Payment}</TableCell> */}
                </TableRow>
              ))
            ) : (
              <h1>no stock yet</h1>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Feedbacks;

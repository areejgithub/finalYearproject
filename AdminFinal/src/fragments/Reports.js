import React, { useState, useEffect, useRef } from "react";
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
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import { Button } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import { red } from "@mui/material/colors";
import ReactToPrint from "react-to-print";
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>;
function Reports() {
  let total = 0;
  let totalsale = 0;
  // const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [stock, setStock] = useState([]);
  const navigate = useNavigate();
  let componentRef = useRef();
  window.swal = swal;
  useEffect(() => {
    const getStock = [];
    const subscriber = db.collection("Stripe").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getStock.push({
          ...doc.data(),
          key: doc.id,
        });
      });

      setStock(getStock);
      setloading(false);
      console.log("report data", getStock);
    });
    return () => subscriber();
  }, []);
  if (loading) {
    return <h1>Loading data from firebase...</h1>;
  }

  return (
    <>
      <div>
        <h2
          style={{
            margin: "auto",
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Sales Report
        </h2>

        <TableContainer
          component={Paper}
          style={{
            width: "680px",
            // height: "500px",
            margin: "auto auto",
            boxShadow: "0px 0px 8px 0px",
          }}
        >
          <Table
            // ref={(el) => (componentRef = el)}
            stickyHeader
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            style={{ backgroundColor: "white" }}
          >
            <TableHead style={{ backgroundColor: "rgb(60,179,113)" }}>
              <TableRow>
                <TableCell
                  align="left"
                  style={{ backgroundColor: "rgb(60,179,113)", width: "50%" }}
                >
                  OrderID
                </TableCell>
                <TableCell
                  align="left"
                  style={{ backgroundColor: "rgb(60,179,113)" }}
                >
                  CustomerName
                </TableCell>
                <TableCell
                  align="left"
                  style={{ backgroundColor: "rgb(60,179,113)" }}
                >
                  TotalPayment
                </TableCell>

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
                    <TableCell align="left">{data.OrderId}</TableCell>
                    <TableCell align="left" component="th" scope="row">
                      {data.Customername}
                    </TableCell>
                    <TableCell align="left">{data.Payment}</TableCell>
                  </TableRow>
                ))
              ) : (
                <h1>no stock yet</h1>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <div style={{ marginLeft: "750px", flexDirection: "row" }}>
          {stock.forEach((item) => {
            {
              /* totalprice = item.price * item.count; */
            }
            total = item.Payment;
            totalsale += total;
            console.log("total sale is" + totalsale);
          })}{" "}
          <h5
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "30px",
              marginRight: "80px",
            }}
          >
            <SummarizeOutlinedIcon fontSize="50px" />
            Total Sale:{totalsale}
          </h5>
          {/* <ReactToPrint
            trigger={() => {
              return <Button>Download Report</Button>;
            }}
            content={() => componentRef}
            documentTitle="Sales Report"
            pageStyle="print"
          /> */}
        </div>
        {/* <Button>Download Report</Button> */}
      </div>
    </>
  );
}

export default Reports;

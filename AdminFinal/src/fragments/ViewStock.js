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
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import EditPopup from "../Components/EditPopup";
import AddProduct from "./AddProduct";

import Edit from "@mui/icons-material/Edit";

import "../fragments/styles.css";
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>;
function ViewStock() {
  // const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [stock, setStock] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const [del, setDel] = useState(false);
  const navigate = useNavigate();
  window.swal = swal;

  const Stockfunc = () => {
    const getStock = [];
    const subscriber = db
      .collection("CBS Store")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getStock.push({
            ...doc.data(),
            key: doc.id,
          });
        });

        setStock(getStock);
        setloading(false);
      });
    return () => subscriber();
    if (loading) {
      return <h1>Loading data from firebase...</h1>;
    }
  };
  useEffect(() => {
    Stockfunc();
  }, []);
  useEffect(() => {
    Stockfunc();
    setDel(false);
  }, [del]);

  const deleteContent = (key) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log(key);
        db.collection("CBS Store")
          .doc(key)
          .delete()
          .then(() => {
            console.log("Sucessfully deleted");
            setDel(true);
          });
        swal(
          "Your Data is deleted Sucessfully!",
          {
            icon: "success",
          }

          // function () {
          //   location.reload();
          // }
        );
      } else {
        swal("Your Data is Safe!");
      }
    });
  };

  // const handleDelete = (key) => {
  //   db.collection("DUMY")
  //     .doc(key)
  //     .delete()
  //     .then(() => {
  //       console.log("Sucessfully deleted");
  //     })
  //     .catch((error) => {
  //       console.log("Error while removing :", error);
  //     });
  // };

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
        Stock Details
      </h2>

      <TableContainer
        component={Paper}
        style={{
          width: "780px",
          height: "500px",
          margin: "auto auto",
          boxShadow: "0px 0px 8px 0px",
        }}
      >
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{ backgroundColor: "rgb(60,179,113)" }}
              >
                Product Barcode
              </TableCell>
              <TableCell
                align="center"
                style={{ backgroundColor: "rgb(60,179,113)" }}
              >
                ProductName
              </TableCell>
              <TableCell
                align="center"
                style={{ backgroundColor: "rgb(60,179,113)" }}
              >
                Price
              </TableCell>

              <TableCell
                align="center"
                style={{ backgroundColor: "rgb(60,179,113)" }}
              >
                Quantity
              </TableCell>
              <TableCell
                align="center"
                style={{ backgroundColor: "rgb(60,179,113)" }}
              >
                Size
              </TableCell>
              <TableCell
                align="center"
                style={{ backgroundColor: "rgb(60,179,113)" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            style={{
              backgroundColor: "white",
              // padding: "10px",
            }}
          >
            {stock.length > 0 ? (
              stock.map((data) => (
                <TableRow
                  key={data.key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {data.ID}
                  </TableCell>
                  <TableCell align="center">{data.ProductName}</TableCell>
                  <TableCell align="center">{data.Price}</TableCell>
                  <TableCell align="center">
                    {data.Quantity}

                    {/* {Object.entries(data.colorMap)
                    .filter((c) => c[1] < 10)
                    .map((c) => (
                      <p>{red}</p>
                    ))} */}
                  </TableCell>
                  <TableCell align="center">{data.Size}</TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <Link to={`../update/${data.key}`}>
                        <Edit color="primary" />
                      </Link>
                      {/* <EditIcon
                      onClick={() => getHandlerid(data.key, setOpenPopup(true))}
                    /> */}
                    </IconButton>

                    <IconButton>
                      <DeleteIcon
                        color="primary"
                        onClick={() => {
                          // navigate("viewstock");
                          // handleDelete(data.key);
                          deleteContent(data.key);
                          navigate("../viewstock");
                        }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <h1>loading from database</h1>
            )}
          </TableBody>
        </Table>
        <EditPopup openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <AddProduct />
        </EditPopup>
      </TableContainer>
    </>
  );
}

export default ViewStock;

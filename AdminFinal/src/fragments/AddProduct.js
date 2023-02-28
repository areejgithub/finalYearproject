import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import swal from "sweetalert";
import {
  Input,
  Button,
  Typography,
  TextField,
  makeStyles,
  Paper,
  // FormControlLabel,
  // Switch,
} from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CropFreeTwoToneIcon from "@mui/icons-material/CropFreeTwoTone";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import DriveFileRenameOutlineSharpIcon from "@mui/icons-material/DriveFileRenameOutlineSharp";
import LineWeightRoundedIcon from "@mui/icons-material/LineWeightRounded";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import isEmpty from "validator/lib/isEmpty";
import db from "../firebase";
import { storage } from "../firebase";
import InputAdornment from "@mui/material/InputAdornment";
// const useStyle = makeStyles(() => ({
//   root: {
//     // "& .MuiFormControl-root": {
//     width: "80%",
//     // margin: theme.spacing(1),
//     // },
//   },
// }));
function AddProduct({ getID, setID }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [barcode, setBarcode] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [formData, setFormData] = useState({
    barcode: "",
    name: "",
    price: "",
    quantity: "",
    size: "",
    errorMsg: false,
  });
  window.swal = swal;

  const { errorMsg } = formData;

  // const classes = useStyle();
  // useEffect(() => {
  //   console.log("the id here is :", getID);
  //   if (getID !== undefined && getID !== "") {
  //     // editHandler();
  //   }
  // }, [getID]);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const showErrorMsg = (msg) => {
    <div className="alert alert-danger" role={alert}>
      {msg}
    </div>;
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref(image.name)
          // .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            console.log(url);
          });
      }
    );
  };
  console.log("image: ", image);
  const submit = (e) => {
    e.preventDefault();
    if (!barcode && !name && !price && !quantity && !size) {
      swal("All fields are required");
    } else if (price <= 0) {
      swal("price cannot be 0 or less");
    } else if (quantity < 1) {
      swal("Quantity cannot be less than 1");
    } else if (barcode.length != 13) {
      swal("Barcode must be 13 digits");
    } else {
      db.collection("CBS Store")
        .add({
          ID: barcode,
          ProductName: name,
          Price: price,
          Quantity: quantity,
          Size: size,
          ProductImage: url,
        })
        .then((docRef) => {
          console.log("Data saved sucessfully: ", docRef.id);
          swal("Good job!", "Your Data is Saved Sucessfully!", "success", {
            button: "Aww yiss!",
          });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      setName("");
      setPrice("");
      setQuantity("");
      setSize("");
      setBarcode("");
      // image("");
      setUrl("");
    }
  };

  return (
    // <form className={classes.root}
    // <Paper>
    <Box
      bgcolor="white"
      boxShadow={10}
      p={3}
      style={{
        margin: "auto",
        width: "550px",
        textAlign: "center",
        // paddingLeft: "20px",
        // paddingRight: "20px",
        // paddingTop: "7px",
        // paddingBotton: "25px",
        marginBottom: "10px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "rgb(60,179,113)" }}>
        Add New Product
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          autoComplete="off"
          // fullWidth
          label="Product Name"
          id="pname"
          size="small"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DriveFileRenameOutlineSharpIcon
                  style={{ color: "rgb(60,179,113)" }}
                />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          autoComplete="off"
          // fullWidth
          label="Price"
          id="outlined-size-small"
          size="small"
          type="number"
          value={price}
          variant="standard"
          onChange={(e) => setPrice(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyIcon style={{ color: "rgb(60,179,113)" }} />
              </InputAdornment>
            ),
          }}
          style={{ float: "right", marginLeft: "60px" }}
        />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          autoComplete="off"
          label="Quantity"
          id="outlined-size-small"
          size="small"
          name="Quantity"
          variant="standard"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <InventorySharpIcon style={{ color: "rgb(60,179,113)" }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          autoComplete="off"
          label="Size"
          id="outlined-size-small"
          size="small"
          name="Size"
          variant="standard"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LineWeightRoundedIcon style={{ color: "rgb(60,179,113)" }} />
              </InputAdornment>
            ),
          }}
          style={{ float: "right", marginLeft: "60px" }}
        />
      </div>
      <br />
      <br />

      <TextField
        autoComplete="off"
        fullWidth
        label="Product Barcode"
        id="outlined-size-small"
        size="small"
        variant="standard"
        type="number"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CropFreeTwoToneIcon style={{ color: "rgb(60,179,113)" }} />
            </InputAdornment>
          ),
        }}
      />
      <br />
      <br />
      <>
        <br />
        <Input
          hidden
          margin="normal"
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          name="images"
          onChange={handleChange}
          style={{
            float: "left",
          }}
        />
      </>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          float: "right",
        }}
      >
        <img
          src={url}
          alt=""
          style={{ height: "100px", width: "100px", flexDirection: "column" }}
        />
        <Button
          variant="contained"
          onClick={handleUpload}
          style={{
            flexDirection: "column",
            width: "100px",
            height: "20px",
            marginTop: "5px",
          }}
        >
          Upload
        </Button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* </label> */}

      {/* <FormControlLabel control={<Switch name="gilad" />} label="Verified" /> */}
      <Button
        onClick={submit}
        style={{
          backgroundColor: "rgb(60,179,113)",
          marginTop: "20px",
          color: "black",
        }}
        startIcon={<TurnedInIcon />}
        fullWidth
      >
        Submit
      </Button>
      <br />
    </Box>
    // </Paper>
    // </form>
  );
}

export default AddProduct;

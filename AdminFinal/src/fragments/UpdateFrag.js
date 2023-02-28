import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Input,
  Button,
  Typography,
  TextField,
  // FormControlLabel,
  // Switch,
} from "@mui/material";
import swal from "sweetalert";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CropFreeTwoToneIcon from "@mui/icons-material/CropFreeTwoTone";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import DriveFileRenameOutlineSharpIcon from "@mui/icons-material/DriveFileRenameOutlineSharp";
import LineWeightRoundedIcon from "@mui/icons-material/LineWeightRounded";
import InputAdornment from "@mui/material/InputAdornment";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import isEmpty from "validator/lib/isEmpty";
import { useParams, useNavigate } from "react-router-dom";
import db from "../firebase";
import { storage } from "../firebase";
function UpdateFrag() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [barcode, setBarcode] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const [material, setMaterial] = useState({
    ID: "",
    ProductName: "",
    Price: "",
    Quantity: "",
    Size: "",
    errorMsg: false,
  });
  window.swal = swal;
  // const [formData, setFormData] = useState({
  //   barcode: "",
  //  ProductName: "",
  //   Price: "",
  //   Quantity: "",
  //   Size: "",
  //   errorMsg: false,
  // });
  const [loading, setloading] = useState(true);
  const [stock, setStock] = useState([]);
  const { errorMsg } = material;
  let { id } = useParams();
  console.log("document key is:", id);
  useEffect(() => {
    db.collection("CBS Store")
      .doc(id)
      .get()
      .then((doc) => {
        const newData = doc.data();
        setMaterial(newData);
      });
  }, []);
  console.log(material);
  const onChange = (e) => {
    const { value, name } = e.target;
    // console.log(value,id)
    setMaterial({ ...material, [name]: value });
  };
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
  const update = (id) => {
    // e.preventDefault();
    var updateData = db.collection("CBS Store").doc(id);
    return updateData
      .update({
        ID: material.ID,
        ProductName: material.ProductName,
        Price: material.Price,
        Quantity: material.Quantity,
        Size: material.Size,
      })
      .then(function () {
        console.log("Document sucessfully updated");
        navigate("../viewstock");
        swal("Good job!", "Your Data is Updated Sucessfully!", "success", {
          button: "Aww yiss!",
        });
      })
      .catch(function (error) {
        console.log("Error updating");
      });
  };

  return (
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
        Update Product
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          autoComplete="off"
          label="Product Name"
          id="outlined-size-small"
          size="small"
          name="ProductName"
          value={material.ProductName}
          onChange={(e) => onChange(e)}
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
          label="Price"
          id="outlined-size-small"
          size="small"
          name="Price"
          value={material.Price}
          variant="standard"
          onChange={(e) => onChange(e)}
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
          value={material.Quantity}
          onChange={(e) => onChange(e)}
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
          value={material.Size}
          onChange={(e) => onChange(e)}
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
        name="ID"
        variant="standard"
        value={material.ID}
        onChange={(e) => onChange(e)}
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
      <Button
        style={{
          backgroundColor: "rgb(60,179,113)",
          marginTop: "20px",
          color: "black",
        }}
        fullWidth
        onClick={() => update(id)}
        startIcon={<SystemUpdateIcon />}
      >
        Update
      </Button>
      <br />
    </Box>
  );
}

export default UpdateFrag;

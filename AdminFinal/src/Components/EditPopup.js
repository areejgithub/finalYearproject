import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

export default function EditPopup(props) {
  const { alertTitleClasses, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>
        <div>title goes here</div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

import React from "react";
import Button from "react-bootstrap/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Modal = ({ openModel, handleCloseModel }) => {
  return (
    <Dialog
      open={openModel}
      onClose={handleCloseModel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="container">
        <DialogTitle style={{ textAlign: "center" }}>
          اكتب الكود هنا
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <input
              className="form-control"
              style={{ margin: "20px 0", borderRadius: "30px" }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ borderRadius: "50px" }}
            onClick={handleCloseModel}
            variant="outline-success"
          >
            اشترك الان
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default Modal;

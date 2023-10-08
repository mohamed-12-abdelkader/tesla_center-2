import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "../Ui";
import MenuItem from "@mui/material/MenuItem";
const CreateAccount = () => {
  return (
    <div className="form" style={{ textAlign: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: "50px", color: "white" }}> Tesla center </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          style={{
            width: "500px",
            boxShadow: " 0 0 10px rgba(0, 0, 0, 0.5)",
            marginBottom: "50px",
          }}
        >
          <div>
            <h3 style={{ margin: "20px", color: "white" }}>انشاء حساب جديد </h3>
          </div>
          <div
            style={{
              display: "grid",
              width: "450px",
              margin: "auto",
              marginBottom: "20px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="الاسم كامل "
              variant="outlined"
              style={{
                margin: "10px ",
                backgroundColor: "white",
                borderRadius: "15px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="الايميل "
              variant="outlined"
              style={{
                margin: "10px ",
                backgroundColor: "white",
                borderRadius: "15px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="رقم الهاتف "
              variant="outlined"
              style={{
                margin: "10px ",
                backgroundColor: "white",
                borderRadius: "15px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="كلمة السر "
              variant="outlined"
              style={{
                margin: "10px ",
                backgroundColor: "white",
                borderRadius: "15px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="تاكيد كلمة السر   "
              variant="outlined"
              style={{
                margin: "10px ",
                backgroundColor: "white",
                borderRadius: "15px",
              }}
            />

            <TextField
              id="outlined-select-currency"
              select
              label="الصف الدراسى "
              style={{
                margin: "10px ",
                backgroundColor: "white",
                borderRadius: "15px",
              }}
            >
              <MenuItem>fdsgh</MenuItem>
            </TextField>

            <Button>انشاء الحساب</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

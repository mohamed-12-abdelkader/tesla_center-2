import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "../Ui";
const Login = () => {
  return (
    <div
      className="form"
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <form
          style={{
            width: "500px",
            boxShadow: " 0 0 10px rgba(0, 0, 0, 0.5)",
            marginBottom: "50px",
            backgroundColor: "#cccccc42",
            borderRadius: "20px",
          }}
        >
          <div>
            <h3 style={{ margin: "20px", color: "white", fontWeight: "bold" }}>
              {" "}
              تسجيل الدخول{" "}
            </h3>
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
              label=" الايميل  "
              variant="outlined"
              style={{
                width: "450px",
                margin: "10px auto",
                backgroundColor: "white",
                borderRadius: "15px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="كلمة السر "
              variant="outlined"
              style={{
                width: "450px",
                margin: "10px auto",
                backgroundColor: "white",
                borderRadius: "15px",
              }}
            />
            <Button size="smal">تسجيل الدخول </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

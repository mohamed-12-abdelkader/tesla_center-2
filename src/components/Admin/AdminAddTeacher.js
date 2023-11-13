import React from "react";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "../Ui";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import avatar from "../../imgs/photo2.jpg";

const AdminAddTeacher = () => {
  const [img, setImg] = useState(avatar);
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h3>
          اضافة <span style={{ color: "red" }}>مدرس جديد:</span>
        </h3>
      </div>
      <form>
        <div style={{ margin: "10px 0", width: "100%" }}>
          <label
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            htmlFor="upload-photo"
          >
            <h5>
              {" "}
              اختر صورة{" "}
              <span style={{ color: "red" }}>
                {" "}
                المدرس <ArrowBackIcon />
              </span>
            </h5>
            <img
              src={img}
              style={{ height: "150px", width: "150px", cursor: "pointer" }}
            />
          </label>
          <input
            type="file"
            name="photo"
            id="upload-photo"
            style={{ display: "none" }}
            onChange={onImageChange}
          />
        </div>
        <TextField
          style={{ margin: "10px 0", width: "100%" }}
          id="filled-basic"
          label="اسم المدرس"
          variant="filled"
        />

        <TextField
          style={{ margin: "10px 0", width: "100%" }}
          id="filled-select-currency"
          select
          label="اختر الصف الدراسى "
          defaultValue="EUR"
          variant="filled"
        >
          <MenuItem>الصف الاول الثانوى</MenuItem>
          <MenuItem>الصف الاول الثانوى</MenuItem>
          <MenuItem>الصف الاول الثانوى</MenuItem>
        </TextField>
        <TextField
          style={{ margin: "10px 0", width: "100%" }}
          id="filled-select-currency"
          select
          label="اختر المادة "
          defaultValue="EUR"
          variant="filled"
        >
          <MenuItem>الصف الاول الثانوى</MenuItem>
          <MenuItem>الصف الاول الثانوى</MenuItem>
          <MenuItem>الصف الاول الثانوى</MenuItem>
        </TextField>

        <Button block> اضافة المدرس </Button>
      </form>
    </div>
  );
};

export default AdminAddTeacher;

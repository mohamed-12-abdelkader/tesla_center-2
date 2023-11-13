import React from "react";
import avatar from "../../imgs/photo2.jpg";
import MenuItem from "@mui/material/MenuItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "../Ui";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useUserContext } from "../../context/Context";
const AdminAddLecture = () => {
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
          اضافة <span style={{ color: "red" }}> محاضرة جديدة :</span>
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
                المحاضرة <ArrowBackIcon />
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
          type="file"
          id="outlined-basic"
          label="  فيديو المحاضرة  "
          variant="outlined"
        />

        <TextField
          style={{ margin: "10px 0", width: "100%" }}
          id="filled-basic"
          label="اسم  المحاضرة  "
          variant="filled"
        />
        <TextField
          style={{ margin: "10px 0", width: "100%" }}
          id="filled-basic"
          label="وصف المحاضرة     "
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
        <TextField
          style={{ margin: "10px 0", width: "100%" }}
          id="filled-select-currency"
          select
          label="اختر  المدرس  "
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
          label="اختر  الشهر الدراسى   "
          defaultValue="EUR"
          variant="filled"
        >
          <MenuItem>الصف الاول الثانوى</MenuItem>
          <MenuItem>الصف الاول الثانوى</MenuItem>
          <MenuItem>الصف الاول الثانوى</MenuItem>
        </TextField>
        <Button block> اضافة المحاضرة </Button>
      </form>
    </div>
  );
};

export default AdminAddLecture;

import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "../Ui";
import { TextField } from "@mui/material";
const AdminAddExam = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h3>
          اضافة <span style={{ color: "red" }}> اختبار جديد :</span>
        </h3>
      </div>
      <form>
        <TextField
          style={{ margin: "10px 0", width: "100%" }}
          id="filled-basic"
          label="اسم  الاختبار   "
          variant="filled"
        />
        <TextField
          style={{ margin: "10px 0", width: "100%" }}
          id="filled-basic"
          label="وصف الاختبار      "
          variant="filled"
        />
        <TextField
          style={{ margin: "10px 0", width: "100%" }}
          id="filled-basic"
          label="السؤال        "
          variant="filled"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <TextField
            style={{ margin: "10px 0", width: "48%" }}
            id="filled-basic"
            label="الاختيار الاول         "
            variant="filled"
          />
          <TextField
            style={{ margin: "10px 0", width: "48%" }}
            id="filled-basic"
            label="الاختيار الثانى         "
            variant="filled"
          />
          <TextField
            style={{ margin: "10px 0", width: "48%" }}
            id="filled-basic"
            label="الاختيار الثالث         "
            variant="filled"
          />
          <TextField
            style={{ margin: "10px 0", width: "48%" }}
            id="filled-basic"
            label="الاختيار الرابع         "
            variant="filled"
          />
        </div>
        <TextField
          style={{ margin: "10px 0", width: "100%" }}
          id="filled-select-currency"
          select
          label="الاختيار الصحيح "
          defaultValue="EUR"
          variant="filled"
        >
          <MenuItem> 1</MenuItem>
          <MenuItem> 2</MenuItem>
          <MenuItem> 3</MenuItem>
          <MenuItem> 4</MenuItem>
        </TextField>
        <Button block> التالى </Button>
        <label> اختار مسار الامتحان </label>
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
        <TextField
          style={{ margin: "10px 0", width: "100%" }}
          id="filled-select-currency"
          select
          label=" اختر المحاضرة "
          defaultValue="EUR"
          variant="filled"
        >
          <MenuItem>الصف الاول الثانوى</MenuItem>
          <MenuItem>الصف الاول الثانوى</MenuItem>
          <MenuItem>الصف الاول الثانوى</MenuItem>
        </TextField>

        <Button block> ارسال </Button>
      </form>
    </div>
  );
};

export default AdminAddExam;

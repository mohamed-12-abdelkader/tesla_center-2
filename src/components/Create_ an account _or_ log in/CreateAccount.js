import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "../Ui";
import MenuItem from "@mui/material/MenuItem";
import { useUserContext } from "../../context/Context";

const CreateAccount = () => {
  const {
    studentsData,
    setStudentsData,
    specializations,
    selectedSpecialization,
    setSelectedSpecialization,
    grades,
    selectedGrade,
    setSelectedGrade,
  } = useUserContext();

  const handleSpecializationChange = (event) => {
    const selectedSpecId = parseInt(event.target.value, 10);
    const selectedSpec = specializations.find(
      (spec) => spec.id === selectedSpecId
    );
    setSelectedSpecialization(selectedSpec);
    setSelectedGrade(null); // Reset selectedGrade when changing specialization
  };

  // في handleGradeChange
  const handleGradeChange = (event) => {
    const selectedGradeId = parseInt(event.target.value, 10);
    const selectedGrd = grades.find((grade) => grade.id === selectedGradeId);
    setSelectedGrade(selectedGrd);
  };

  return (
    <div className="form" style={{ textAlign: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{ marginBottom: "50px", color: "white", fontWeight: "bold" }}
        >
          {" "}
          Tesla center{" "}
        </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
              انشاء حساب جديد{" "}
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
              label="  الاسم كامل "
              variant="outlined"
              value={studentsData.fullName}
              onChange={(e) =>
                setStudentsData({ ...studentsData, fullName: e.target.value })
              }
              style={{
                margin: "10px ",
                backgroundColor: "white",
              }}
            />
            <TextField
              id="outlined-basic"
              label="الايميل "
              variant="outlined"
              value={studentsData.email}
              onChange={(e) =>
                setStudentsData({ ...studentsData, email: e.target.value })
              }
              style={{
                margin: "10px ",
                backgroundColor: "white",
              }}
            />
            <TextField
              id="outlined-basic"
              label="رقم الهاتف "
              variant="outlined"
              value={studentsData.phoneNumber}
              onChange={(e) =>
                setStudentsData({
                  ...studentsData,
                  phoneNumber: e.target.value,
                })
              }
              style={{
                margin: "10px ",
                backgroundColor: "white",
              }}
            />
            <TextField
              id="outlined-basic"
              label="كلمة السر "
              variant="outlined"
              value={studentsData.password}
              onChange={(e) =>
                setStudentsData({ ...studentsData, password: e.target.value })
              }
              style={{
                margin: "10px ",
                backgroundColor: "white",
              }}
            />
            <TextField
              id="outlined-basic"
              label="تاكيد كلمة السر   "
              variant="outlined"
              value={studentsData.confirmPassword}
              onChange={(e) =>
                setStudentsData({
                  ...studentsData,
                  confirmPassword: e.target.value,
                })
              }
              style={{
                margin: "10px ",
                backgroundColor: "white",
              }}
            />
            <TextField
              select
              label="اختر التخصص:"
              variant="outlined"
              value={selectedSpecialization ? selectedSpecialization.id : ""}
              onChange={handleSpecializationChange}
              style={{ margin: "10px", backgroundColor: "white" }}
            >
              {specializations.map((spec) => (
                <MenuItem key={spec.id} value={spec.id}>
                  {spec.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="اختر الصف:"
              variant="outlined"
              value={selectedGrade ? selectedGrade.id : ""}
              onChange={handleGradeChange}
              style={{ margin: "10px", backgroundColor: "white" }}
            >
              {grades.map((grade) => (
                <MenuItem key={grade.id} value={grade.id}>
                  {grade.attributes.name}
                </MenuItem>
              ))}
            </TextField>
            <Button>انشاء الحساب</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "../Ui";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateAccount = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [grades, setGrades] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [grade_id, setSelectedGrade] = useState(null);
  const Navigate = useNavigate();
  const fetchSpecializations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/specializations"
      );
      setSpecializations(response.data);
    } catch (error) {
      console.error("Error fetching specializations:", error);
    }
  };

  useEffect(() => {
    fetchSpecializations();
  }, []);

  useEffect(() => {
    if (selectedSpecialization) {
      axios
        .get(`http://localhost:8000/api/v1/grades/${selectedSpecialization.id}`)
        .then((response) => {
          setGrades(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching grades:", error);
        });
    }
  }, [selectedSpecialization]);

  const handleSpecializationChange = (event) => {
    const selectedSpecId = parseInt(event.target.value, 10);
    const selectedSpec = specializations.find(
      (spec) => spec.id === selectedSpecId
    );
    setSelectedSpecialization(selectedSpec);
    setSelectedGrade(null);
  };

  const handleGradeChange = (event) => {
    const selectedGradeId = parseInt(event.target.value, 10);
    const selectedGrd = grades.find((grade) => grade.id === selectedGradeId);
    setSelectedGrade(selectedGrd);
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    // Prepare the data to send to the server
    const userData = {
      name,
      email,
      phone,
      password,
      password_confirmation,
      grade_id,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/student/register",
        userData
      );

      // If registration is successful, you can redirect the user
      if (response.status === 200) {
        // Redirect to the home page or another desired page
        Navigate("/home");
      } else {
        // Handle any other responses or errors
        console.error("Registration failed:", response);
        // You can display an alert or error message here
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      // Handle any network errors
      console.error("Error during registration:", error);
      // You can display an alert or error message here
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="form" style={{ textAlign: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            marginBottom: "50px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {" "}
          Tesla center{" "}
        </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          style={{
            width: "500px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            marginBottom: "50px",
            backgroundColor: "#cccccc42",
            borderRadius: "20px",
          }}
        >
          <div>
            <h3 style={{ margin: "20px", color: "white", fontWeight: "bold" }}>
              إنشاء حساب جديد{" "}
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
              id="full-name"
              label="الاسم الكامل"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                margin: "10px ",
                backgroundColor: "white",
              }}
            />
            <TextField
              id="email"
              label="البريد الإلكتروني"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                margin: "10px ",
                backgroundColor: "white",
              }}
            />
            <TextField
              id="phone"
              label="رقم الهاتف"
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                margin: "10px ",
                backgroundColor: "white",
              }}
            />
            <TextField
              id="password"
              type="password"
              label="كلمة المرور"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                margin: "10px ",
                backgroundColor: "white",
              }}
            />
            <TextField
              id="password-confirmation"
              type="password"
              label="تاكيد كلمة المرور  "
              variant="outlined"
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
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
              label="اختر الصف"
              variant="outlined"
              value={grade_id ? grade_id.id : ""}
              onChange={handleGradeChange}
              style={{ margin: "10px", backgroundColor: "white" }}
            >
              {grades.map((grade) => (
                <MenuItem key={grade.id} value={grade.id}>
                  {grade.attributes.name}
                </MenuItem>
              ))}
            </TextField>

            <Button onClick={handleCreateAccount}>إنشاء الحساب</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

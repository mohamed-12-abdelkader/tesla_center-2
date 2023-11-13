import React, { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Button, TextField, MenuItem } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img from "../../imgs/student.png";
import { Container, Row, Col } from "react-bootstrap";
import baseUrl from "../../Api/baseURL";
import ScrollToTop from "../Scroll/ScrollToTop";
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
      const response = await axios.get(`${baseUrl}/api/v1/specializations`);
      setSpecializations(response.data);
    } catch (error) {
      console.error("Error fetching specializations:", error);
    }
  };

  const fetchCSRFTOKEN = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get("/sanctum/csrf-cookie");
    } catch (error) {
      console.error("Error fetching csrf-token:", error);
    }
  };

  useEffect(() => {
    fetchSpecializations();
    fetchCSRFTOKEN();
  }, []);

  useEffect(() => {
    if (selectedSpecialization) {
      axios
        .get(`${baseUrl}/api/v1/grades/${selectedSpecialization.id}`)
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

  return (
    <div>
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col lg={6} md={12}>
            <h3 style={{ direction: "rtl" }}>
              انشئ <span style={{ color: "red" }}> حسابك الان :</span>
            </h3>
            <form style={{ display: "grid", margin: "50px" }}>
              <TextField
                style={{ margin: "10px 0" }}
                id="filled-basic"
                label={
                  <div>
                    <PersonIcon style={{ color: "#0079d9" }} />
                    name
                  </div>
                }
                variant="filled"
              />
              <TextField
                style={{ margin: "10px 0" }}
                id="filled-basic"
                label={
                  <div>
                    <AlternateEmailIcon style={{ color: "#0079d9" }} />
                    email
                  </div>
                }
                variant="filled"
              />
              <TextField
                style={{ margin: "10px 0" }}
                id="filled-basic"
                label={
                  <div>
                    <PhoneIcon style={{ color: "#0079d9" }} />
                    phone
                  </div>
                }
                variant="filled"
              />
              <TextField
                style={{ margin: "10px 0" }}
                id="filled-basic"
                type="password"
                label={
                  <div>
                    <LockIcon style={{ color: "#0079d9" }} />
                    password
                  </div>
                }
                variant="filled"
              />
              <TextField
                style={{ margin: "10px 0" }}
                type="password"
                id="filled-basic"
                label={
                  <div>
                    <LockIcon style={{ color: "#0079d9" }} />
                    password_confirmation
                  </div>
                }
                variant="filled"
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                  select
                  label="اختر التخصص:"
                  value={
                    selectedSpecialization ? selectedSpecialization.id : ""
                  }
                  onChange={handleSpecializationChange}
                  variant="outlined"
                  style={{ margin: "10px 0", width: "48%" }}
                >
                  {specializations.map((spec) => (
                    <MenuItem key={spec.id} value={spec.id}>
                      {spec.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  value={grade_id ? grade_id.id : ""}
                  onChange={handleGradeChange}
                  select
                  label="اختر الصف"
                  variant="outlined"
                  style={{ margin: "10px 0", width: "48%" }}
                >
                  {grades.map((grade) => (
                    <MenuItem key={grade.id} value={grade.id}>
                      {grade.attributes.name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <Button>انشاء الحساب </Button>
              <h5 style={{ direction: "rtl", marginTop: "30px" }}>
                {" "}
                يوجد لديك حساب بالفعل ؟{" "}
                <Link
                  to="/login"
                  style={{ color: "red", textDecoration: "none" }}
                >
                  {" "}
                  ادخل الى حسابك الان !{" "}
                </Link>
                <Link to="/admin">admin</Link>
              </h5>
            </form>
          </Col>
          <Col lg={6} md={12} className="text-center">
            <img style={{ width: "300px" }} src={img} alt="Image" />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </div>
  );
};

export default CreateAccount;

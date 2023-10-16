import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

const UserProvider = ({ children }) => {
  const [studentsData, setStudentsData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    selectedClass: "First",
  });

  const [login, setLogin] = useState(true);

  const [specializations, setSpecializations] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [grades, setGrades] = useState([]);

  const [selectedGrade, setSelectedGrade] = useState(null);

  const fetchAxios = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/v1/specializations"
    );
    setSpecializations(response.data);
  };

  useEffect(() => {
    fetchAxios();
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

  console.log("Specializations:", specializations);
  console.log("Grades:", grades);

  return (
    <UserContext.Provider
      value={{
        studentsData,
        setStudentsData,
        login,
        specializations,
        setSpecializations,
        selectedSpecialization,
        setSelectedSpecialization,
        grades,
        setGrades,
        selectedGrade,

        setSelectedGrade,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

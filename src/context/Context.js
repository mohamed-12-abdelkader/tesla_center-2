import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(true);

  const [specializations, setSpecializations] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [grades, setGrades] = useState([]);

  const [selectedGrade, setSelectedGrade] = useState(null);

  return (
    <UserContext.Provider
      value={{
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

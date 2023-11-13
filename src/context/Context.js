import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import avatar from "../imgs/photo2.jpg";
import baseUrl from "../Api/baseURL";
const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

const UserProvider = ({ children }) => {
  const [showSignupPage, setShowSignupPage] = useState(true);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [openNot, setOpenNot] = useState(false);

  const [classes, setClasses] = useState([]);

  const handleClickOpen = () => {
    setOpenModel(true);
  };

  const handleCloseModel = () => {
    setOpenModel(false);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenNot(false);
  };

  const handleAppClick = () => {
    if (open || openNot) {
      handleClose();
    }
  };

  useEffect(() => {
    baseUrl
      .get("/api/v1/grades")
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.error("حدث خطأ في الاستدعاء: ", error);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{
        showSignupPage,
        handleAppClick,
        handleClose,
        setOpen,
        open,
        openNot,
        setOpenNot,
        classes,
        handleClickOpen,
        handleCloseModel,
        openModel,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

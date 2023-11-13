import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import AdmenLinks from "./AdminLinks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../my-profail/LinksProfail.css";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ScrollToTop from "../Scroll/ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";
const Admin = () => {
  const [currentLink, setCurrentLink] = useState(""); // تخزين الفهم الحالي

  return (
    <>
      <Container
        className="conatainer-profile"
        style={{ width: "85%", margin: "80px auto" }}
      >
        <div className=" row">
          <div className="profail-user">
            <h5>ادارة المنصة </h5>
            <AdminPanelSettingsIcon className="icone" />
          </div>

          <div className="container-aitem">
            <div className="aitem-1">
              <AdmenLinks
                currentLink={currentLink}
                setCurrentLink={setCurrentLink}
              />
            </div>
            <div className="aitem-2">
              <Outlet />
            </div>
          </div>
        </div>
      </Container>
      <ScrollToTop />
    </>
  );
};

export default Admin;

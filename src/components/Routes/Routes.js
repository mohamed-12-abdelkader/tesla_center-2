import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "../Create_ an account _or_ log in/CreateAccount";
import Login from "../Create_ an account _or_ log in/Login";
import Home from "../Home/Home";
import Profile from "../my-profail/Profail";
import Myprofaile from "../my-profail/MyProfail";
import Mycourses from "../my-profail/MyCourses";
import AdminAddMonth from "../Admin/AdminAddMonth";
import View from "../my-profail/View";
import PlatformManagement from "../Admin/PlatformManagement";
import AdminAddLecture from "../Admin/AdminAddLecture";
import AdminAddTeacher from "../Admin/AdminAddTeacher.js";
import ClassDetails from "../classes/ClassDetails";
import Admin from "../Admin/Admin";
import AdminAddExam from "../Admin/AdminAddExam";
import TeacherDetails from "../teachers/TeacherDetails";
import Month from "../months/Month";
import Lecture from "../lectures/Lecture";
import LecturVideo from "../lectures/LecturVideo";
import LecturExam from "../lectures/LecturExam";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />}>
          <Route
            index
            element={
              <Myprofaile
                name={"mohamed"}
                email={"mohamed12@gmail.com"}
                phoneNumber={"01227849578675"}
              />
            }
          />
          <Route
            path="myprofaile"
            element={
              <Myprofaile
                name={"mohamed"}
                email={"mohamed12@gmail.com"}
                phoneNumber={"01227849578675"}
              />
            }
          />
          <Route path="mycourses" element={<Mycourses />} />
          <Route path="views" element={<View />} />
        </Route>

        <Route path="/admin/*" element={<Admin />}>
          <Route index element={<PlatformManagement />} />
          <Route path="addteacher" element={<AdminAddTeacher />} />
          <Route path="addmonth" element={<AdminAddMonth />} />
          <Route path="addlecture" element={<AdminAddLecture />} />
          <Route path="addexam" element={<AdminAddExam />} />
        </Route>
        <Route path="/class/:id" element={<ClassDetails />} />
        <Route path="/teachers/:id" element={<TeacherDetails />} />
        <Route path="/month/:id" element={<Month />} />
        <Route path="/lectur/:id" element={<Lecture />}>
          <Route path="video/:id" element={<LecturVideo />} />
          <Route path="exam/:id" element={<LecturExam />} />
        </Route>
      </Routes>
    </div>
  );
};
export default Router;

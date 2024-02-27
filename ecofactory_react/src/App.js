import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/PublicPages/Layout";
import RequireAuth from "./Components/RequireAuth";
import Unauthorized from "./Components/PublicPages/Unauthorized";
import Missing from "./Components/PublicPages/Missing";
import Register from "./Components/PublicPages/Register";
import Login from "./Components/PublicPages/Login";
import Admin from "./Components/RolePages/Admin";
import AdminHome from "./Components/RolePages/AdminLayoutComponents/AdminHome";
import Complaints from "./Components/PublicPages/Complaints";
import HelpAndSupport from "./Components/PublicPages/HelpAndSupport";
import ComplaintManage from "./Components/RolePages/AdminLayoutComponents/ComplaintManage";
import ComplaintDetails from "./Components/RolePages/AdminLayoutComponents/ComplaintDetails";
import ComplaintAnswer from "./Components/RolePages/AdminLayoutComponents/ComplaintAnswer";
import UserManage from "./Components/RolePages/AdminLayoutComponents/UserManage";
import UserManageSelect from "./Components/RolePages/AdminLayoutComponents/UserManageSelect";

function App() {
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/register" element={<Register />} />
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/help-articles" element={<HelpAndSupport />} />
        <Route path="/" element={<Layout />}>
          {/* we want to protect these routes */}
          <Route element={<RequireAuth allowedPermissions={"admin"} />}>
            {/* <Route index={true} element={<Admin />} /> */}
            <Route index={true} element={<AdminHome />} />
            <Route path="/manage-complaints" element={<ComplaintManage />} />
            <Route path="/manage-complaints/:id" element={<ComplaintDetails />} />
            <Route path="/answer-complaints/:id" element={<ComplaintAnswer />} />
            <Route path="/manage-users" element={<UserManage />} />
            <Route path="/manage-users/:id" element={<UserManageSelect />} />
          </Route>
          {/* catch all */}
        </Route>
        <Route path="*" element={<Missing />} />
        {/* </Route> */}
      </Routes>
    </React.Suspense>
  );
}

export default App;

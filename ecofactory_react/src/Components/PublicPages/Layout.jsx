import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Admin from "../RolePages/Admin";
// import DashboardNavbar from "../Navbar/DashboardNavbar";
// import Sidebar from "../Navbar/Sidebar";
// import "../../assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "../../assets/css/animate.min.css";

const Layout = () => {
  const { auth } = useAuth();
  return (
    <div>
      {auth.role === "admin" && <Admin />}
      <div style={{ paddingLeft: "240px" }}>
        <Outlet />
      </div>
      {/* <div className="wrapper">
        <Sidebar />
        <div className="main-panel">
          <DashboardNavbar />
          <div className="content custom-margin2">
            <Outlet />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Layout;

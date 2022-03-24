import "./Styles/App.css";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./Home";
import UserCreateNewUser from "Components/Login/UserCreateNewUser";
import Register from "Components/Login/Register";
import Login from "Components/Login/Login";
import UserList from "./Components/User/UserList";

function App() {
  return (
    <div className="app ">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Home
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/userlist"} className="nav-link">
              User list
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/createUser"} className="nav-link">
              createUser
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Register
            </Link>
          </li>
        </div>
      </nav>
      <div className="container-fluid">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/createUser" element={<UserCreateNewUser />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;

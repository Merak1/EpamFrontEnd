import "./Styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import UserList from "./Components/User/UserList";
import User from "./Components/User/User";
import AddUser from "./Components/User/AddUser";
import UserCreateNewUser from "Components/Login/UserCreateNewUser";
import Home from "./Home";

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
        </div>
      </nav>
      <div className="container-fluid">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/createUser" element={<UserCreateNewUser />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

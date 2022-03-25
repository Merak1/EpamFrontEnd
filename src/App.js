import "./Styles/App.css";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector, useStore } from "react-redux";

import Home from "./Home";
import UserCreateNewUser from "Components/Login/UserCreateNewUser";
import Register from "Components/Login/Register";
import Login from "Components/Login/Login";
import UserList from "./Components/User/UserList";
import Header from "./Components/header";

function App() {
  // const isLogged = true;

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   // (state) => state.auth
  //   (state) => state
  // );
  return (
    <div className="app ">
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/createUser" element={<UserCreateNewUser />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default App;

import AddUser from "Components/User/AddUser";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="register text-center container">
      <div className="row">
        <h1 className="bold">Register</h1>
        <p>Please register an account</p>
      </div>
      <AddUser isAdmin={false} />

      <input
        type="submit"
        form="createNewUserForm"
        className="btn btn-primary"
        // onClick={onAccept}
      />
    </div>
  );
};

export default Register;

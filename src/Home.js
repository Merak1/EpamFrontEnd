import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useStore } from "react-redux";
import Appointments from "Components/Appoinments/Appointments";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  // const STORE = useStore();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="home">
      <Appointments />
    </div>
  );
};

export default Home;

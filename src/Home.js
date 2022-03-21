import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");

  return (
    <div className="home">
      <p>This is home</p>
    </div>
  );
};

export default Home;

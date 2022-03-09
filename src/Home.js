import {Routes, Route, Link} from "react-router-dom";
import Editable from "./Components/Other/editable";
import {useEffect, useState} from "react";

const Home = () => {
  const [task, setTask] = useState("");

  // return (
  // <Editable text={task} placeholder="Write a task name" type="input">
  //   <input
  //     type="text"
  //     name="task"
  //     placeholder="Write a task name"
  //     value={task}
  //     onChange={(e) => setTask(e.target.value)}
  //   />
  // </Editable>
  return (
    <div className="home">
      <p>This is home</p>
    </div>
    // );
  );
};

export default Home;

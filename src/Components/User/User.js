import Editable from "Components/Other/editable";
import {useEffect, useState} from "react";

const User = ({selectedUser}) => {
  const [user, setUser] = useState("");
  const [task, setTask] = useState("");

  useEffect(() => {
    setUser(selectedUser);
    return () => {
      console.log(`user => ${user}`);
      console.log(`user => ${user.firstName}`);
    };
  }, [user]);

  const handleNameClick = () => {};
  return (
    <>
      {selectedUser ? (
        <div className="show-User">
          <h3>User</h3>
          <section className="userdata_edit">
            <p>First Name:</p>
            <p className="clickable" onClick={handleNameClick}>
              {selectedUser.firstName}
            </p>
          </section>

          <div className="editable">
            <Editable text={task} placeholder={selectedUser.firstName} type="input">
              <input
                className="test-input"
                type="text"
                name="task"
                placeholder={`Please change the value of ${selectedUser.firstName}`}
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Editable>
          </div>

          {/* <section className="userdata_edit">
                <p> Last Name:</p>
                <p className="clickable"> {selectedUser.lastName}</p>
              </section>
              <section className="userdata_edit">
                <p>Email:</p>
                <p className="clickable"> {selectedUser.email} </p>
              </section>
              <section className="userdata_edit">
                <p>Phone:</p>
                <p className="clickable"> {selectedUser.phone} </p>
              </section> */}
        </div>
      ) : (
        <div>
          <p>Please select a User</p>
        </div>
      )}
    </>
  );
};

export default User;

import React, { useState } from "react";
import AddUser from "./component/User/AddUser";
import UserList from "./component/User/UserList";

const App = () => {
  const [userData, SetuserData] = useState([]);

  const getUserData = (data) => {
    SetuserData([...userData,data]);
  };

  return (
    <div>
      <AddUser newData={getUserData} />
      <UserList users={userData} />
    </div>
  );
};

export default App;

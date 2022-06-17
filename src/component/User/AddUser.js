import React, { useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import "./AddUser.css";

let no = 1;

const AddUser = (props) => {
  const [enteredName, SetenteredName] = useState("");
  const [enteredAge, SetenteredAge] = useState("");
  const [errors, seterror] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length !== 0 && enteredAge > 0) {
      var userDetail = {
        id: no,
        name: enteredName,
        age: enteredAge,
      };
      props.newData(userDetail);
      no += 1;
    } else {
      if (enteredName.trim().length === 0) {
        seterror({
          title: "Name Error",
          message: "UserName cant be empty",
        });
      } else {
        seterror({
          title: "Age Error",
          message: "Age must be not empty and greater than 1",
        });
      }
    }
    SetenteredAge("");
    SetenteredName("");
  };

  const usernameHandler = (event) => {
    SetenteredName(event.target.value);
  };

  const ageHandler = (event) => {
    SetenteredAge(event.target.value);
  };

  const ErrorHandler = () => {
    seterror(null);
  };

  return (
    <div>
      {errors && (
        <Modal
          title={errors.title}
          message={errors.message}
          onConfirm={ErrorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredName}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age Years</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageHandler}
          />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

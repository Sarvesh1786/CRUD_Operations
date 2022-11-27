import React, { useEffect, useState } from "react";
import User from "./User";
import "../App.css";
import AddUser from "./AddUser";
const Emain = () => {
  const [state, setState] = useState([]);
  const [editstate, seteditState] = useState({});

  useEffect(() => {
    fatchData();
  }, []);

  const fatchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setState(json);
      })
      .catch((err) => console.log(err));
  };
  // id, name, email, phone
  const onAdd = async () => {
    // console.log(id, name, email, phone);
    // setState((prevState) => [...prevState, { id, name, email, phone }]);
    setState((prevState) => [...prevState, editstate]);
  };
  const onDelete = async (id) => {
    console.log(id);
    // setState((prevState) => [...prevState, { id, name, email, phone }]);
    const users = state.filter((user) => user.id !== id);
    setState(users);
  };

  const onedit = async (id) => {
    console.log(id);
    const edit = state.find((user) => {
      return user.id === id;
    });
    seteditState(edit);
  };

  const onUpdate = () => {
    const update = [...state];
    const index = update.findIndex((user) => user.id === editstate.id);
    console.log(index);
    update.splice(index, 1, editstate);
    console.log(update);
    setState(update);
  };

  return (
    <>
      <div>
        <h3>React Crud Operations Json Placeholder नमस्ते नमस्ते </h3>
        <div>
          <h3>User List </h3>
          <AddUser
            onUpdate={onUpdate}
            onAdd={onAdd}
            seteditState={seteditState}
            id={editstate.id}
            name={editstate.name}
            email={editstate.email}
            phone={editstate.phone}
          />
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {state.map((user) => (
                <User
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  phone={user.phone}
                  email={user.email}
                  onDelete={onDelete}
                  onedit={onedit}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Emain;

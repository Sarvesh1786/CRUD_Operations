import React, { useEffect, useState } from "react";

const Users = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
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
  }, []);

  return (
    <>
      <h1>Users</h1>
      {JSON.stringify(state)}
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {state.map((user) => <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>)}
      </table>
    </>
  );
};

export default Users;

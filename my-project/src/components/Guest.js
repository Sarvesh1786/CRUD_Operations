import React, { useEffect, useState } from "react";

export default function Guest() {
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
        console.log(json);
        console.log("respons de raha hai");
        console.log(json);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(state);
  return (
    <div>
      <h3>Show All User List </h3>
      {/* {JSON.stringify(state)} */}
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Contect</th>
          <th>City</th>
          <th>Street</th>
          <th>Zipcode</th>
          <th>Suite</th>
          <th>Company </th>
          <th>Website</th>
        </tr>
        {state.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address.city}</td>
            <td>{user.address.street}</td>
            <td>{user.address.zipcode}</td>
            <td>{user.address.suite}</td>
            <td>{user.company.name}</td>
            <td>{user.website}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

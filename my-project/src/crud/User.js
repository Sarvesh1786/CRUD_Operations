import userEvent from "@testing-library/user-event";
import React from "react";
import "./user.css";
const User = ({ id, name, phone, email, onDelete, onedit }) => {
  //   console.log(id, name, phone, email);

  const handleOnDelete = (id) => {
    console.log(id);
    // console.log(e.target.id.value);
    onDelete(id);
  };

  const handleedit = (id) => {
    onedit(id);
  };

  

  return (
    <tr>
      <td style={{ padding: "10px", textAlign: "center" }}>{id}</td>
      <td style={{ padding: "10px", textAlign: "center" }}>{name}</td>
      <td style={{ padding: "10px", textAlign: "center" }}>{email}</td>
      <td style={{ padding: "10px", textAlign: "center" }}>{phone}</td>
      <td style={{ padding: "10px", textAlign: "center" }}>
        <button onClick={() => handleedit(id)}> edit</button>
      </td>
      <td style={{ padding: "10px", textAlign: "center" }}>
        <button onClick={() => handleOnDelete(id) }>delete</button>
      </td>
    </tr>
  );
};

export default User;

import React from "react";

const AddUser = ({ onAdd, id, name, email, phone, seteditState, onUpdate }) => {
  console.log(id, name, email, phone);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd()
    // onAdd(
    //   e.target.id.value,
    //   e.target.name.value,
    //   e.target.email.value,
    //   e.target.phone.value
    // );
    // e.target.id.value = "";
    // e.target.name.value = "";
    // e.target.email.value = "";
    // e.target.phone.value = "";
  };

  const handleChnage = (e) => {
    const { name, value } = e.target;
    seteditState((prevstate) => {
      return { ...prevstate, [name]: value };
    });
  };

  const handleOnSave = (e) => {
    e.preventDefault();

    onUpdate();
  };

  return (
    <div>
      <form>
        <h3>Add User</h3>
        <input placeholder="id" name="id" value={id} onChange={handleChnage} />
        <input
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChnage}
        />
        <input
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChnage}
        />
        <input
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={handleChnage}
        />

        <button onClick={handleOnSubmit}>Add</button>
        <button onClick={handleOnSave}>save</button>

        <hr />
      </form>
    </div>
  );
};
export default AddUser;

import React, { Component } from "react";

export default class User_API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          result: json,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.result)
    return (
      <div>
        <h3>Show All User List (Class Based) </h3>
        {/* {JSON.stringify(state)} */}
        <table border={1}>
            <tbody>
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
          {this.state.result.map((user) => 
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
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

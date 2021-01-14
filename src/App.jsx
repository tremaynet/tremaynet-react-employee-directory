import React, { useEffect } from "react";
import USERS from "./users";

const App = () => {
  const formattedUsers = USERS.map((user) => ({
    ...user,
    fullName: `${user.name.first} ${user.name.last}`,
    city: user.location.city,
    state: user.location.state,
    country: user.location.country
  }));
  console.log(formattedUsers);

  return (
    <table>
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Gender</th>
        <th>City</th>
        <th>State</th>
        <th>Country</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
      {formattedUsers.map(user => (
        <tr key={user.index}>
          <td>
            {user.index}
          </td>
          <td>
            {user.fullName}
          </td>
          <td>
            {user.gender}
          </td>
          <td>
            {user.city}
          </td>
          <td>
            {user.state}
          </td>
          <td>
            {user.country}
          </td>
          <td>
            {user.email}
          </td>
          <td>
            {user.phone}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default App;

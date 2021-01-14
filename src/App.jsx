import React, { useEffect, useState } from "react";
import USERS from "./users";

const App = () => {
  const [sort, setSort] = useState({});
  const [filter, setFilter] = useState({});
  const formattedUsers = USERS.map((user) => ({
    ...user,
    fullName: `${user.name.first} ${user.name.last}`,
    city: user.location.city,
    state: user.location.state,
    country: user.location.country,
  }));
  const [users, setUsers] = useState(formattedUsers);

  useEffect(() => {
    let users = [...formattedUsers];
    Object.keys(filter).map((key) => {
      users = users.filter((user) =>
        user[key].toString().toLowerCase().includes(filter[key].toLowerCase())
      );
    });
    setSort({});
    setUsers(users);
  }, [filter]);
  const sortUsers = (key, order) => {
    const compare = (a, b) => {
      console.log(a[key], b[key]);
      if (a[key] > b[key]) {
        if (order) {
          return 1;
        } else {
          return -1;
        }
      }
      if (a[key] < b[key]) {
        if (order) {
          return -1;
        } else {
          return 1;
        }
      }
      return 0;
    };
    const sortedUsers = [...users];
    sortedUsers.sort(compare);
    setUsers(sortedUsers);
  };
  const onChangeSort = (key) => {
    if (sort[key] == undefined) {
      sortUsers(key, true);
      setSort((prevState) => ({ ...prevState, [key]: true }));
      return;
    }
    sortUsers(key, !sort[key]);
    setSort((prevState) => ({ ...prevState, [key]: !sort[key] }));
  };
  const headerColor = (key) => ({
    color: sort[key] !== undefined && (sort[key] ? "#F00" : "#0F0"),
  });
  return (
    <div>
      <h1> Users Table </h1>
      <table>
        <tr>
          <th>
            <a
              href="#"
              style={headerColor("index")}
              onClick={() => onChangeSort("index")}
            >
              Index
            </a>
          </th>
          <th>
            <a
              href="#"
              style={headerColor("fullName")}
              onClick={() => onChangeSort("fullName")}
            >
              Name
            </a>
          </th>
          <th>
            <a
              href="#"
              style={headerColor("gender")}
              onClick={() => onChangeSort("gender")}
            >
              Gender
            </a>
          </th>
          <th>
            <a
              href="#"
              style={headerColor("city")}
              onClick={() => onChangeSort("city")}
            >
              City
            </a>
          </th>
          <th>
            <a
              href="#"
              style={headerColor("state")}
              onClick={() => onChangeSort("state")}
            >
              State
            </a>
          </th>
          <th>
            <a
              href="#"
              style={headerColor("country")}
              onClick={() => onChangeSort("country")}
            >
              Country
            </a>
          </th>
          <th>
            <a
              href="#"
              style={headerColor("email")}
              onClick={() => onChangeSort("email")}
            >
              Email
            </a>
          </th>
          <th>
            <a
              href="#"
              style={headerColor("phone")}
              onClick={() => onChangeSort("phone")}
            >
              Phone
            </a>
          </th>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              onChange={(ev) =>
                setFilter((prevState) => ({
                  ...prevState,
                  index: ev.target.value,
                }))
              }
            />
          </td>
          <td>
            <input
              type="text"
              onChange={(ev) =>
                setFilter((prevState) => ({
                  ...prevState,
                  fullName: ev.target.value,
                }))
              }
            />
          </td>
          <td>
            <input
              type="text"
              onChange={(ev) =>
                setFilter((prevState) => ({
                  ...prevState,
                  gender: ev.target.value,
                }))
              }
            />
          </td>
          <td>
            <input
              type="text"
              onChange={(ev) =>
                setFilter((prevState) => ({
                  ...prevState,
                  city: ev.target.value,
                }))
              }
            />
          </td>
          <td>
            <input
              type="text"
              onChange={(ev) =>
                setFilter((prevState) => ({
                  ...prevState,
                  state: ev.target.value,
                }))
              }
            />
          </td>
          <td>
            <input
              type="text"
              onChange={(ev) =>
                setFilter((prevState) => ({
                  ...prevState,
                  country: ev.target.value,
                }))
              }
            />
          </td>
          <td>
            <input
              type="text"
              onChange={(ev) =>
                setFilter((prevState) => ({
                  ...prevState,
                  email: ev.target.value,
                }))
              }
            />
          </td>
          <td>
            <input
              type="text"
              onChange={(ev) =>
                setFilter((prevState) => ({
                  ...prevState,
                  phone: ev.target.value,
                }))
              }
            />
          </td>
        </tr>
        {users.map((user) => (
          <tr key={user.index}>
            <td>{user.index}</td>
            <td>{user.fullName}</td>
            <td>{user.gender}</td>
            <td>{user.city}</td>
            <td>{user.state}</td>
            <td>{user.country}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;

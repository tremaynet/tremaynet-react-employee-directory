import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
function App() {
  const [sort, setSort] = useState({});
  const [filter, setFilter] = useState({});
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadRandomUser = async () => {
    let usersList = [];
    setLoading(true);
    for (let i = 0; i < 20; i++) {
      const res = await axios.get("https://randomuser.me/api/").catch(err => console.log(err));
      if (res) {
        const user = res.data.results[0];
        usersList.push({
          ...user,
          fullName: `${user.name.first} ${user.name.last}`,
          city: user.location.city,
          state: user.location.state,
          country: user.location.country,
        });
      }
    }
    setLoading(false);
    setLoadedUsers(usersList);
    setUsers(usersList);
  };
  useEffect(() => {
    loadRandomUser();
  }, []);
  useEffect(() => {
    let users = [...loadedUsers];
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
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1> Users Table </h1>
      <table>
        <tr>
          <th>
            <a href="#">Index</a>
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
          <td></td>
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
        {loading && "Loading..."}
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
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
}

export default App;

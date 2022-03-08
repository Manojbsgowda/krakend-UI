import React, { useEffect, useState } from "react";
import "./table.css";
import axios from "axios";
const Table = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((value) => {
      setUserData(value.data);
      setLoading(false);
    });
    console.log("inside use effect");
  }, []);

  console.log(userData);
  console.log(loading);
  return (
    <div>
      {<p>{loading ? "Loading..." : ""}</p>}
      <table>
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((value, index) => {
            return (
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

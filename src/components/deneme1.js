import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Deneme1() {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [filtered, setFiltered] = useState("");

  function filteredFunc(e) {
    setFiltered(e.target.value);
  }

  const filterTxt = allUsers.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filtered.toLowerCase())
    );
  });

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((data) => setAllUsers(data.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((jsondata) => setFakeUsers(jsondata))
  //       .finally(() => setIsLoading(false));
  //   }, []);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}

      <h1>JSON placeholder users</h1>
      <div>
        <label htmlFor="FilterInput">Type for filter the list</label>
        <input
          type="text"
          name="FilterInput"
          placeholder="Filter list"
          value={filtered}
          onChange={filteredFunc}
        />
      </div>
      <form class="myForm" name="myForm">
        <h3>Add a new contact</h3>
        <input type="text" name="fullName" placeholder="Full name" />

        <input type="text" name="phoneNum" placeholder="Phone number" />

        <button type="submit">Submit</button>
      </form>
      <ul>
        {filterTxt.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> <span>{item.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Deneme1;

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Deneme1() {
  const [fakeUsers, setFakeUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((data) => setFakeUsers(data.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }, []);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((jsondata) => setFakeUsers(jsondata))
  //       .finally(() => setIsLoading(false));
  //   }, []);

  return (
    <div>
      <h1>JSON placeholder users</h1>
      {isLoading && <h3>Loading...</h3>}
      <ul>
        {fakeUsers.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> <span>{item.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Deneme1;

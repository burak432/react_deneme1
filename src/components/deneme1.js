import React from "react";
import { useEffect, useState } from "react";

function Deneme1() {
  const [fakeUsers, setFakeUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jsondata) => setFakeUsers(jsondata))
      .finally(() => setIsLoading(false));
  }, []);

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

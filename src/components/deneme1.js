import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Deneme1() {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [newContact, setNewContact] = useState({
    name: "",
    phone: ""
  });

  function addNewInputs(e) {
    setNewContact({...newContact,
      [e.target.name]: e.target.value,
    });
  }

  function filteredFunc(e) {
    setFiltered(e.target.value);
  }

  function formRun(e) {
    e.preventDefault();
    console.log(newContact);
    if(newContact.name !== "" && newContact.phone !== "") {
      setAllUsers([...allUsers, newContact]);
      setNewContact({
        name: "",
        phone: ""
      })
    }
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
      <form className="myForm" name="myForm" onSubmit={formRun} autoComplete="off">
        <h3>Add a new contact</h3>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          onChange={addNewInputs}
          value={newContact.name}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          onChange={addNewInputs}
          value={newContact.phone}
        />
        <button type="submit">Submit</button>
      </form>
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

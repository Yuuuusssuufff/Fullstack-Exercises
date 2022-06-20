import axios from "axios";
import React, { useState, useEffect } from "react";

function Phonebook() {
  const [persons, setPersons] = useState([
    {},
    // { name: "Arto Hellas", number: "01234567" },
  ]);
  const [numbers, setNumbers] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => setPersons(res.data))
      .catch((e) => e.message);
  }, []);
  const display = persons.map((person) => (
    <ul style={{ listStyle: "none" }}>
      <li key={person.name}>
        {person.name}: {person.number}
      </li>
    </ul>
  ));
  console.log(display);
  const [newName, setNewName] = useState("");

  const handleName = (e) => {
    // console.log(e.target.value)
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNumbers(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    //  console.log("Hello")

    if (persons.find((person) => person.name === newName)) {
      return alert(`${newName}`);
    }

    const personObj = {
      name: newName,
      number: numbers,
    };

    setPersons([...persons, personObj]);
    setNewName("");

    // for(const p of persons){
    //   p.name === newName
    //   // ? alert (`${newName} is already added`)
    //   ? setPersons([...persons], alert(`${newName} is already added`))
    //   :setPersons([...persons, {name: newName}])
    // }
    // persons[0].name ===(newName)
    // ? alert(`${newName} is already added`)
    //   :setPersons([...persons, {name: newName}])
  };

  const handleSearch = (e) => {
    // if (newName.includes(e.target.value)) console.log("me");

    persons.forEach((person) => {
      if (person["name"].includes(e.target.value)) {
        console.log(person.name);
      }
    });

    // if (persons.find((person) => person["name"].includes(e.target.value) console.log(person.name))) {
    //   console.log([...person.name]);
    // }
  };

  // console.log(
  //   persons.forEach((pers) => console.log(pers["name"].includes(newName)))
  // );
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleSearch} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleClick}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={numbers} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {display}
    </div>
  );
}

export default Phonebook;

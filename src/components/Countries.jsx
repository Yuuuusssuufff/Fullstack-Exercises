import React from "react";
import "../components/style.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [display, setDisplay] = useState("Me");
  const [search, setSearch] = useState("");
  const [countryData, setCountryData] = useState({
    name: "",
    capital: "",
    area: "",
    population: "",
    languages: [],
    flags: "",
  });

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((resp) => setCountries(resp.data))
      // .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(countries);
  const countryList = countries.map((country) => country.name.common);

  console.log(countryList);
  function handleSearch(e) {
    e.preventDefault();
    // countryList.filter((country) => country.includes(e.target.value));
    setSearch(e.target.value);
  }
  console.log(search);
  let countrySearch = countryList.filter((country) =>
    country.toLowerCase().includes(`${search}`)
  );
  console.log(countrySearch);
  let countryView = ()=>{
    countrySearch.length > 10 
    ? "Too many matches, specify another filter"
    ? 1 < countrySearch.length <10 ? countrySearch 
    : "country"
  }
  // for (const con of countryList) {
  //   if (con.includes(search)) {
  //     console.log(con);
  //   }
  // }
  return (
    <div>
      <form>
        <label htmlFor="search">find countries </label>
        <input id="search" value={search} onChange={handleSearch} />
        {/* <div>
          {countries.map((st) => (
            <ul>
              <li key={st.id}>{st.name.common}</li>
            </ul>
          ))}
        </div> */}
        <div>
          <ul className="noList">
            {countrySearch.map((con) => (
              <li key="con">{con}</li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Countries;

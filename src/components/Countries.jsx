import React from "react";
import "../components/style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [display, setDisplay] = useState("Me");
  const [search, setSearch] = useState("");
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((resp) => setCountries(resp.data))
      .catch((err) => console.log(err.message));
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
  //     )
  //     .then((resp) => console.log(resp))
  //     .catch((e) => console.log(e.message));
  // });

  function handleSearch(e) {
    e.preventDefault();

    setSearch(e.target.value);
  }
  console.log(search);
  let countrySearch = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search)
  );
  console.log(countrySearch);

  const countryView =
    countrySearch.length > 10
      ? "Too many matches, specify another filter"
      : countrySearch.map((con) => (
          <div>
            <li value={con.name.id} key={con.name.id}>
              {con.name.common}
              <button
                className="but"
                onClick={(e) => setSearch(e.target.value)}
              >
                show
              </button>
            </li>
          </div>
        ));

  // console.log(countryView);

  return (
    <div>
      <form>
        <label htmlFor="search">find countries </label>
        <input id="search" value={search} onChange={handleSearch} />
        <div>
          {/* {countries.map((st) => (
          <ul>
            <li key={st.id}>{st.name.common}</li>
          </ul>
        ))} */}
        </div>
        <div>
          <ul className="noList">
            {countrySearch.length === 1
              ? countrySearch.map((con) => (
                  <div>
                    <p style={{ fontWeight: 600 }}>{con.name.common}</p>
                    <p> capital{con.capital}</p>
                    <p>area {con.area}</p>
                    <h4>languages</h4>
                    <ul>
                      {Object.values(con.languages).map((lan) => (
                        <li>{lan}</li>
                      ))}
                    </ul>
                    <img src={con.flags.png} />
                  </div>
                ))
              : countryView}
            {/* {countrySearch.map((con) => (
            <li key={con.id}>{con}</li>
          ))} */}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Countries;

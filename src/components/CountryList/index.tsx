import React, { useState } from "react";
import { Countries } from "../../constants/countries";
import CountryCard from "../CountryCard";
// import { countries } from "./constants/Countries";
// import CountryCard from "./components/CountryCard";

const CountryList: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredCountries = Countries.filter((country: { name: string }) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "Black" }}>Country List</h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search country name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            textAlign: "center",
          }}
        />
      </div>

      <div style={cardContainerStyle}>
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name}
            name={country.name}
            capital={country.capital}
            flag={country.flag}
          />
        ))}
        {filteredCountries.length === 0 && <p>No countries found.</p>}
      </div>
    </div>
  );
};

const cardContainerStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

export default CountryList;

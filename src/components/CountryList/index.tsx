import React, { useState } from "react";
import { Countries } from "../../constants/countries";
import CountryCard from "../CountryCard";
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

// import { useEffect, useState } from "react";

// // Define the shape of data we expect from API
// interface Country {
//   capital?: string[];
//   languages?: Record<string, string>;
// }

// export default function CountriesList() {
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   useEffect(() => {
//     localStorage.setItem("countries", JSON.stringify(countries));
//   }, [countries]);

//   useEffect(() => {
//     fetch(
//       "https://restcountries.com/v3.1/independent?status=true&fields=languages,capital"
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch countries");
//         }
//         return response.json();
//       })
//       .then((data: Country[]) => {
//         setCountries(data);
//         setLoading(false);
//       })
//       .catch((err: Error) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Independent Countries</h1>
//       <ul className="space-y-4">
//         {countries.map((country, index) => (
//           <li
//             key={index}
//             className="p-4 rounded-lg shadow bg-gray-100 hover:bg-gray-200"
//           >
//             <h2 className="text-lg font-semibold">
//               Capital: {country.capital?.[0] || "N/A"}
//             </h2>
//             <p>
//               Languages:{" "}
//               {country.languages
//                 ? Object.values(country.languages).join(", ")
//                 : "N/A"}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// interface Country{
//   country?: string[]; 
//   languages?: Record<string,string>;
// }
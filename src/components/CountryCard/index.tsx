import React from "react";

type Props = {
  name: string;
  capital: string;
  flag: string;
};

const CountryCard: React.FC<Props> = ({ name, capital, flag }) => {
  return (
    <div style={cardStyle}>
      <img src={flag} alt={`${name} flag`} style={flagStyle} />
      <h3>{name}</h3>
      <p>
        <strong>Capital:</strong> {capital}
      </p>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  width: "200px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "10px",
  margin: "10px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const flagStyle: React.CSSProperties = {
  width: "100%",
  height: "100px",
  objectFit: "cover",
  borderRadius: "4px",
};

export default CountryCard;

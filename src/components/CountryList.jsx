import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_COUNTRIES } from "../graphql/queries";

function CountryList({ onSelect, dispatch, favorites }) {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading countries.</p>;

  const isFavorite = (code) => favorites.some((c) => c.code === code);

  const filteredCountries = data.countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFavorites = favorites.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type='text'
        placeholder='Search countries...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />

      <h2>🌍 Favorite Countries</h2>

      <ul>
        {filteredFavorites.map((country) => (
          <li key={country.code}>
            <button
              onClick={() => onSelect(country.code)}
              style={{ cursor: "pointer" }}
            >
              {country.name}
            </button>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FAVORITE", payload: country })
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <h2>🌍 All Countries</h2>
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.code}>
            <button
              onClick={() => onSelect(country.code)}
              style={{ cursor: "pointer" }}
            >
              {country.name}
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: isFavorite(country.code)
                    ? "REMOVE_FAVORITE"
                    : "ADD_FAVORITE",
                  payload: country,
                })
              }
            >
              {isFavorite(country.code) ? "★" : "☆"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;

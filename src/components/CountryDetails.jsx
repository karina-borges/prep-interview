import { useQuery } from "@apollo/client";
import { GET_COUNTRY_BY_CODE } from "../graphql/queries";

function CountryDetails({ code }) {
  const { data, loading, error } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { code },
  });

  if (loading) return <p>Loading country details...</p>;
  if (error) return <p>Error loading details.</p>;

  const country = data.country;

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Currency: {country.currency}</p>
      <p>Languages: {country.languages.map((l) => l.name).join(", ")}</p>
    </div>
  );
}

export default CountryDetails;

import type { CountryType } from "../../type";
import "./Country.css";

export interface CountryProps {
  country: CountryType;
}

export default function Country({ country }: CountryProps) {
  const handleVisited = () => {};

  return (
    <div className="country">
      <h3>{country.name.common}</h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Population:</p>
      <p>Country: </p>
      <button onClick={handleVisited}>Visited</button>
    </div>
  );
}

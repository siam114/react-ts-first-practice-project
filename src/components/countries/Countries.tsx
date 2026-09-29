import { use } from "react";
import type { CountryType } from "../../type";
import Country from "../country/Country";
import "./Countries.css";

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const contries = use(countriesPromise);
  console.log(contries);

  return (
    <div>
      <h2>Countries: </h2>
      <div className="countries">
        {contries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country} />
        ))}
      </div>
    </div>
  );
}

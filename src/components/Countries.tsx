import { use } from "react"
import type { CountryType } from "../type"
import Country from "./country/Country"

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {

    const contries = use(countriesPromise)  
    console.log(contries)
    
    return (
        <div>
            <h2>Countries: </h2>
            <ul>
                {
                    contries.map((country) => <Country key={country.name.common} country={country} />)
                }
            </ul>
        </div>
    )
}
import './App.css'
import type { CountryType } from './type';

function App() {

  //step 1: create a promise function to fetch data from the api
  const countriesPromise = async ():Promise<CountryType[]>=>{
    const res = await fetch('https://openapi.programming-hero.com/api/all')
    const data = await res.json()
    return data.countries;
  }

  return (
    <>
    <h2>World on the go...</h2>
    </>
  )
}

export default App

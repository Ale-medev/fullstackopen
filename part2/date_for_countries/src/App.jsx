import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountriesList from './components/CountriesList'
import CountryProfile from './components/CountryProfile'


function App() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [showCountry, setShowCountry] = useState('')

  useEffect(()=>{
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(res => setCountries(res.data))
  } ,[])

  const handleSearch = (e) => {
    setSearchCountry(e.target.value)
    setShowCountry('')
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  )

  const handleClick = (country)=> {
    setShowCountry(country)
  }

  return (
    <>
      <Filter value={searchCountry} handleChange={handleSearch} />

      {
        showCountry ? (
          <CountryProfile country={showCountry} />
        ) : filteredCountries.length === 1 ? (
          <CountryProfile country={filteredCountries[0]} />
        ) : filteredCountries.length <= 10 && filteredCountries.length > 1 ? (
          <CountriesList filteredCountries={filteredCountries} handleClick={handleClick}/>
        ) : filteredCountries.length === 0 && countries.length !== 0 ? (
          <div>No results</div>
        ) : (
          <div>Too many matches, specify another filter</div>
        ) 
      }

    </>
  )
}

export default App

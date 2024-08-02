const CountriesList = ({filteredCountries, handleClick}) => (

    <ul>
        {filteredCountries.map((country) => (
            <li key={country.area}>{country.name.common}<button onClick={() => handleClick(country)}>show</button></li>
        ))}
    </ul>
)

export default CountriesList
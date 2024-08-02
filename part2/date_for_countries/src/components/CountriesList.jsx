const CountriesList = ({filteredCountries}) => (

    <ul>
        {filteredCountries.map((country) => (
            <li key={country.area}>{country.name.common}</li>
        ))}
    </ul>
)

export default CountriesList
const CountryProfile = ({ country }) => (
    <div>
        <h1>{country.name.common}</h1>

        <ul className="profile-info">
            <li>capital: {country.capital}</li>
            <li>area: {country.area}</li>
        </ul>

        <p><strong>languages:</strong></p>

        <ul>
        {
            Object.values(country.languages).map((language, index) => (
                <li key={index}>{language}</li>
            ))
        }
        </ul>

        <img src={country.flags.png} alt={`Flag ${country.name.common}`} />
    </div>
)

export default CountryProfile
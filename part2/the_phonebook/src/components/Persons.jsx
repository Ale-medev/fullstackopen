const Persons = ({filteredPersons, removePerson}) => (

    <ul>
        {filteredPersons.map((person) => (
            <li key={person.id}><span>{person.name} {person.number} <button onClick={() => removePerson(person)}>delete</button></span></li>
        ))}
    </ul>
)

export default Persons
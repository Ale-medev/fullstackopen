import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleName = (e) =>{
    setNewName(e.target.value)
  }

  const handleNumber = (e) =>{
    setNewNumber(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const addPerson = {
      name: newName,
      number: newNumber 
    }

    if(persons.some(person => person.name === addPerson.name)){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(addPerson))
    }

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {
        persons.map((person) => <li key={person.name}>{person.name} {person.number}</li>)
      }
      </ul>
    </div>
  )
}

export default App
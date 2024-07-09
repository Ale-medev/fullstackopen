import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPerson, setSearchPerson] = useState('')

  const handleName = (e) =>{
    setNewName(e.target.value)
  }

  const handleNumber = (e) =>{
    setNewNumber(e.target.value)
  }

  const handleSearch = (e) =>{
    setSearchPerson(e.target.value)
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

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchPerson.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={searchPerson} handleChange={handleSearch} />

      <h2>add a new</h2>

      <PersonForm 
        handleSubmit={handleSubmit}
        newName={newName}
        handleName={handleName}
        newNumber={newNumber}
        handleNumber={handleNumber}
      />

      <h2>Numbers</h2>

      <Persons filteredPersons={filteredPersons}/>

    </div>
  )
}

export default App
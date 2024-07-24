import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPerson, setSearchPerson] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
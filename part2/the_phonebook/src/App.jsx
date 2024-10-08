import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPerson, setSearchPerson] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleName = (e) => {
    setNewName(e.target.value)
  }

  const handleNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearch = (e) => {
    setSearchPerson(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const addPerson = {
      name: newName,
      number: newNumber 
    }

    const nameMatch = persons.find(person => person.name.toLowerCase() === addPerson.name.toLowerCase());

    if (nameMatch && nameMatch.number === addPerson.number) {
      alert(`${newName} is already added to phonebook`)
    } else if (nameMatch) {
        const person = persons.find(person => person.name === newName)
        const updatePerson = {...person, number: newNumber}
  
        if (window.confirm(`${updatePerson.name} is already added to phonebook, replace the old number with a new one?`)) {
          personService
          .update(updatePerson.id, updatePerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== updatePerson.id ? person : response.data))
          })
          .catch(() => {
            setNotificationMessage(
              {
                message: `Information of ${addPerson.name} has already been removed from server`,
                error: true
              }
            )

            setTimeout(() => {
              setNotificationMessage(null)
            }, 5000)

            setPersons(persons.filter(n => n.id !== updatePerson.id))
          })
        }
    }else {
      personService
        .create(addPerson)
        .then(response => {
          setPersons(persons.concat(response.data));
      });

      setNotificationMessage({message: `Added ${addPerson.name}`})

      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
    }

    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchPerson.toLowerCase())
  )

  const removePerson = (person) => {
    if (window.confirm(`Delete ${person.name}`)) {
      personService
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter(item => item.id !== person.id));
      })
      .catch(() => {
        setNotificationMessage(
          {
            message: `Information of ${person.name} has already been removed from server`,
            error: true
          }
        )

        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)

        setPersons(persons.filter(item => item.id !== person.id));
      })
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notificationMessage} />

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

      <Persons filteredPersons={filteredPersons} removePerson={removePerson} />

    </div>
  )
}

export default App
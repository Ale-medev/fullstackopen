import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (addPerson) => {
    return axios.post(baseUrl, addPerson)
};

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id, updatePerson) => {
    return axios.put(`${baseUrl}/${id}`, updatePerson)
  }

export default { getAll, create, remove, update };
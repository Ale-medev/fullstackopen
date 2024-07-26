import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (addPerson) => {
    return axios.post(baseUrl, addPerson)
};

export default { getAll, create };
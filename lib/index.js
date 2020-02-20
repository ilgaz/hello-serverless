const { get } = require('axios');

const baseUrl = `https://swapi.co/api`;
const totalPeopleAmount = 88;

const randomPerson = () => get(`${baseUrl}/people/${Math.floor(Math.random() * totalPeopleAmount)}`);

const getPersonById = id => get(`${baseUrl}/people/${id}`);


module.exports = { randomPerson, getPersonById };

const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

const getCharById = async (req,res) => {
    const {id} = req.params
    try {
    const response = await axios(URL + id);
    const { data } = response;
    if (data.id) {
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        //res.json(character);
        res.status(200).json(character)
    } else {
        res.status(404).send('Not found');
      }
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

module.exports = getCharById;



/* const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = (res, id) => {
    axios(URL + id)
    .then((response) => response.data)
    .then((data)=>{
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(JSON.stringify(character))
    }).catch((error)=>{
        res.writeHead(500, {'Content-type': 'text/plain'})
        res.end(error.message)
    })
}

module.exports = getCharById */
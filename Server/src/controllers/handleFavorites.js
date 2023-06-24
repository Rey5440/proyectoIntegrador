let myFavorites = [];

const postFav = (req,res) =>{
    const character = req.body;

    myFavorites.push(character);
    res.status(200).json(myFavorites);
}

const deleteFav = (req,res) => {
    const {id} = req.params;
    const filtered = myFavorites.filter(character => character.id !== Number(id))
    myFavorites = filtered;
    res.status(200).json(filtered);
    // si hay mas de un res. deberas retornarlas para q no se dupliquen
    // las respuestas
}

module.exports = {postFav,deleteFav};
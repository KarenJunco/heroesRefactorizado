const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {

    lista : (req, res) => {
        return res.send(heroes); // esto me muestra el JSON

    },

    detalle : (req, res) => {
        //let id = req.params.id;

        let heroe = heroes.find(heroe => heroe.id == req.params.id);
        if(heroe == undefined){
            res.send('Heroe no encontrado');
        }else{
         res.send(`Hola mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
       }
    },
    detalleBio: (req, res) => {

        let heroe = heroes.filter(heroe =>{
            return heroe.id == req.params.id
        });
        if(heroe[0] == undefined){
            res.send('No encontramos un heroe para mostrarte su biografia');
        }else if(req.params.ok){
            res.send(`Heroe: ${heroe[0].nombre} || Reseña: ${heroe[0].resenia}`);
        }else{
            res.send(`${heroe[0].nombre} dice: Lamento que no quieras saber más de mí :(`)
        }
    }

}


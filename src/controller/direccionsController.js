
const db = require('../database/models');
const sequelize = db.sequelize;


const direccionsController = {
   

// crear un direccion
create: (id, direccion) => {
  return db.Direccion.create({
    calle: direccion.calle,
    personaId: id,
  })
    .then((direccion) => {
      console.log(">> Created direccion: " + JSON.stringify(direccion, null, 4));
      return direccion;
    })
    .catch((err) => {
      console.log(">> Error while creating direccion: ", err);
    });
},

// Buscar un comentario por Id
findCommentById : (id) => {
  return db.Direccion.findByPk(id, { include: ["Persona"] })
    .then((direccion) => {
      return direccion;
    })
    .catch((err) => {
      console.log(">> Error while finding direccion: ", err);
    });
},

      findAll : () => {
        return db.Persona.findAll({
          include: ["direccions"],
        }).then((personas) => {
          return personas;
        });
      }


    }
    
 

module.exports = direccionsController
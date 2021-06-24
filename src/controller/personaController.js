const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const personaController = {
   

// crear un persona
    create: (persona) => {
        return db.Persona.create({name: persona.name,lastname: persona.lastname,
        })
        .then((persona) => {
            console.log(">> Created persona: " + JSON.stringify(persona, null, 4));
            return persona;
          })

          .catch((err) => {
            console.log(">> Error while creating persona: ", err);
          });

    },

// Buscar un persona por Id
    findTutorialById : (personaId) => {
        return db.Persona.findByPk(personaId,
             { include: ["direccions"] })

          .then((persona) => {
            return persona;
          })
          .catch((err) => {
            console.log(">> Error while finding persona: ", err);
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
    
 

module.exports = personaController;
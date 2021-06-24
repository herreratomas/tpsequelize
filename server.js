const db = require("./src/database/models");
const controllerPersona = require('./src/controller/personaController');
const controllerDireccion = require('./src/controller/direccionsController');

const run = async () => {

    const name1 = await controllerPersona.create({
        name: "pepe",
        lastname: "perez",
    });

    console.log('--------CREO EL TUTO 2-------');
  

    const name2 = await controllerPersona.create({
   
        name: "pablo",
        lastname: "ponzio",
    });


    const calle1 = await controllerDireccion.create(name1.id, {
        calle: "calle1",
       
    });

    const calle2 = await controllerDireccion.create(name2.id, {
        calle: "calle2",
       
    });

    

//Get Tutorial by given id
    console.log('------BUSCO POR ID UN TUTO --------');
    const tut1Data = await controllerPersona.findPersonaById(name1.id);
    console.log(">> Persona id=" );
    console.log(">> Persona id=" + tut1Data.id,JSON.stringify(tut1Data, null, 2));

    const tut2Data = await controllerPersona.findPersonaById(name2.id);
    console.log(">> Persona id=" + tut2Data.id,JSON.stringify(tut2Data, null, 2)
    );

//Get Comment by given id
console.log('------BUSCO POR ID UN COMENTARIO --------');
const comment1Data = await controllerDireccion.findDireccionById(calle1.id);
console.log( ">> Calle id=" + calle1.id, JSON.stringify(comment1Data, null, 2)
);

const comment2Data = await controllerDireccion.findDireccionById(calle2.id);
console.log(">> Comment id=" + calle2.id,JSON.stringify(comment2Data, null, 2)
);

//Get all Tutorials

const personas = await controllerPersona.findAll();
console.log(">> All personas", JSON.stringify(personas, null, 2));

};

// db.sequelize.sync();
db.sequelize.sync({ force: false}).
then(() => {
    console.log("Drop and re-sync db.");

    console.log('entre a run crear tutorial');
    run();
});
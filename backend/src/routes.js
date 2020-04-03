const { Router} = require('express');
const mealController = require('./controllers/mealControllers');

const routes = Router();

//Metedos HTTP: GET,POST,PUT,DELETE

//TIPOS de parametros:
    //Query Params: request.query (Filtros, ordenação, paginação, etc)
    //Route Params: request.params (Identificar um recurso na alteração ou remoção)
    //Body: request.body (Dados para criação ou alteração de um registro)
//routes.get('/devs', DevController.index);
//routes.post('/devs', DevController.store);

routes.get('/meal',mealController.main);

module.exports = routes;
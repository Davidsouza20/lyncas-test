const express = require('express');
const routes = express.Router();
const booksController = require('./controllers/booksController');


routes.get('/favorite', booksController.index);
routes.post('/favorite', booksController.store);
routes.delete('/favorite/:id', booksController.destroy);

module.exports = routes;

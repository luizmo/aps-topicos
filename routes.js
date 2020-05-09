module.exports = () => {
  const router = require('express').Router();
  const bookController = require('./controllers/bookControllers');
  router.get('/books', bookController.list);
  router.get('/books/:id', bookController.find);
  router.post('/books', bookController.create);
  router.post('/books/:id', bookController.update );
  router.delete('/books/:id', bookController.delete);

  return router;
}
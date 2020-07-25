const bookModel = require('../models/bookModel');


module.exports = {
  async index (req, res) {
    try {
      const books = await bookModel.find();
      return res.status(200).json(books);

    } catch (error) {
      return res.status(400).send({ error });
    } 
  },

  async store (req, res) {
    try {
      const book = await bookModel.create(req.body);
      return res.status(200).json(book);

    } catch (error) {
      return res.status(400).send({ error });
    } 
  },

  async destroy (req, res) {
    try {
      await bookModel.findByIdAndRemove(req.params.id);
      return res.status(200).json('Book removed successfully');

    } catch (error) {
      return res.status(400).send({ error });
    } 
  }

}
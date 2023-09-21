const express = require('express');
const { auth } = require('../MiddelWare/auth');
const { BookModel } = require('../Model/Book.Model');

const bookRoute = express.Router();

bookRoute.post('/books', auth, async (req, res) => {
  try {
    const book = new BookModel(req.body);
    await book.save();
    res.status(201).json({ msg: "Book Added" });
  } catch (err) {
    res.status(500).json({ err: err.message }); 
  }
});

bookRoute.get('/books', auth, async (req, res) => {
  try {
    let { category } = req.query;
    let filter = {};
    if (category) {
      filter.category = category;
    }
    const books = await BookModel.find(filter); 
    res.status(200).json(books); 
  } catch (err) {
    res.status(500).json({ err: err.message }); 
  }
});

bookRoute.get('/books/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookModel.findById(id); 
    if (!book) {
      return res.status(404).json({ msg: 'Book not found!' }); 
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

bookRoute.patch('/books/:id', auth, async (req, res) => { 
  const { id } = req.params;
  try {
    await BookModel.findByIdAndUpdate(id, req.body);
    res.status(204).json({ msg: 'Book updated' });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

bookRoute.delete('/books/:id', auth, async (req, res) => { 
  const { id } = req.params;
  try {
    await BookModel.findByIdAndDelete(id); 
    res.status(202).json({ msg: 'Book Deleted!' });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = { bookRoute };

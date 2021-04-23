const express = require('express')
const router = express.Router()
const bookController = require('../controller/book')
router.get('/books', bookController.getBooks)
router.post('/books', bookController.postBooks)
router.delete('/books/:id', bookController.deleteBook)
router.post('/books/:id', bookController.updateBook)
module.exports = router
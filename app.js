const express = require('express')
const bookRoute = require('./routes/book')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express() 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json({
    limit:'50mb'
}))

app.use(bookRoute)


mongoose.connect('mongodb+srv://tranhoang:BHyyHpfIC3pFWwDA@cluster0.txshp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true}).then(() => app.listen(5000, () => {
    console.log('App listening on port 4000')
}))
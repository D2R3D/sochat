require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const cors = require('cors')
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = (express()) 

app.use(express.json())
app.use(cors())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 60000 *10
    }
}))

app.post('/api/auth/register', ctrl.register)

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
}).catch(error => {
    console.log(error)
});

app.listen(SERVER_PORT, () => {
    console.log(`rocking ${SERVER_PORT}`)
});


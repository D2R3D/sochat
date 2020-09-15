require ('dotenv').config();
const express = require ('express');
const massive = require ('massive');
const ctrl = require('./controller')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express();

app.use(express.json());




massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    app.listen(SERVER_PORT , () => console.log (`live on {$SERVER_PORT}`))
});
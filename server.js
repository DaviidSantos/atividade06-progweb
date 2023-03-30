import express from "express";
import bodyParser from 'body-parser'
import router from './src/router/router.js'

const PORT = 3001;

const server = express()

server.use(bodyParser.json())

server.use('/', router())

server.listen(PORT, () => {
    console.log(`Servidor rodando localhost:${PORT}`)
})


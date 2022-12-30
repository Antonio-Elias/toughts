const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');

const app = express();
const port = 3000;

const conn = require('./db/conn');

conn
    .sync()
    .then(
        ()=>{
            app.listen(port,()=>{
                console.log(`Aplicação rodando: hhtp://localhost:${port}`);
            })
        }
    )
    .catch((err) => {
        console.log(`A aplicação teve o seguinte erro: ${err}`);
    });
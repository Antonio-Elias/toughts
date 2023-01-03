const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');

const app = express();
const port = 3000;

const conn = require('./db/conn');

// Models
const Tought = require('./models/Tougth');


// Import Routes
const toughtsRoutes = require('./routes/toughtsRoutes');

// Import Controller
const ToughtController = require('./controllers/ToughtController');

//template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//receber resposta do body
app.use(
    express.urlencoded({
        extended:true
    })
);

app.use(express.json());

// public path
app.use(express.static('public'));

// session middleware
app.use(
    session({
        name:'session',
        secret: 'nosso_secret',
        resave:false,
        saveUninitialized:false,
        store: new FileStore({
            logFn: function(){},
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie:{ 
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly:true, // em produção com o certificado se usaria o https (SSL), utilizado para que o js não consiga acessar o 
            // Documet.cookie, mas não impede de que o js possa usar este recurso (na parte do cliente).
        },
    })
);


// flash messages
app.use(flash());



// set session to res (A ideia aqui é passar os dados do ususario para o front end e se necessario pode ser utilizado o mesmo)
app.use((req, res, next) => {

    if(req.session.userid){
        res.locals.session = req.session;
    }

    next();
});

// Routes
app.use('/toughts', toughtsRoutes);
app.get('/', ToughtController.showToughts);

conn
    .sync()
    .then(
        ()=>{
            app.listen(port,()=>{
                console.log(`Aplicação rodando: http://localhost:${port}`);
            })
        }
    )
    .catch((err) => {
        console.log(`A aplicação teve o seguinte erro: ${err}`);
    });
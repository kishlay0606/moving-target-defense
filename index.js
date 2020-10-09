
global.i = 0;

if (i == 0) {
    var express = require("express");
    var bodyParser = require('body-parser');
    var Sequelize = require('sequelize');
    var app = express();
    const port = 8013;

    var connection = require('./config');
    var mysql = require('mysql');

    // var connection = mysql.createConnection(...);

    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: 'carti',
        password: "p64266426"

    });
    var connection = new Sequelize('carti', 'root', 'p64266426', {
        dialect: 'mysql'
    })


    connection
        .authenticate()
        .then(() => {
            if (i == 0)
                console.log('SQl db connected');

        })
        .catch(err => {
            console.error('Unable to connect the database: ', err);
        });
    connection
        .sync({
            logging: console.log,
            force: true
        })
        .then(() => {
            console.log('connection to database estabilished successfully.');
            app.listen(port, () => {
                console.log('running server on port' + port);

            });
        })
        .catch(err => {
            console.error('unable to connect to the database', err);
        });
    if (i == 1) {
        connection.query('truncate table users');
    }
    if (i == 0) {

        const { Client } = require('pg')
        const client = new Client({
            user: "postgres",
            password: "p64266426",
            host: "localhost",
            port: 5432,
            database: "carti"

        })
        client.connect()

            .then(() => client.query('truncate table colles'))
    }
    if (i == 1) {

        const { Client } = require('pg')
        const client = new Client({
            user: "postgres",
            password: "p64266426",
            host: "localhost",
            port: 5432,
            database: "carti"

        })
        client.connect()

            .then(() => console.log("postgresql connected "))
    }

    var authenticateController = require('./controllers/authenticate-controller');
    var registerController = require('./controllers/register-controller');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/', function (req, res) {
        res.sendfile('./index.html');
    })
    app.get('/register.html', function (req, res) {
        res.sendfile('./register.html');
    })

    app.get('/login.html', function (req, res) {
        res.sendfile(__dirname + "/" + "login.html");
    })

    /* route to handle login and registration */
    app.post('/api/register', registerController.register1);
    app.post('/api/authenticate', authenticateController.authenticate);

    console.log(authenticateController);
    app.post('/controllers/register-controller', registerController.register1);
    app.post('/controllers/authenticate-controller', authenticateController.authenticate);

    module.exports = connection;
}

if (i == 1) {
    var express = require("express");
    var bodyParser = require('body-parser');
    var Sequelize = require('sequelize');
    var app = express();
    const port = 8013;

    var connection = require('./config');
    var mysql = require('mysql');

    // var connection = mysql.createConnection(...);

    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: 'carti',
        password: "p64266426"

    });
    var connection = new Sequelize('carti', 'root', 'p64266426', {
        dialect: 'mysql'
    })
    connection
        .authenticate()
        .then(() => {
            console.log('postgreSQl db connected');

        })
        .catch(err => {
            console.error('Unable to connect the database: ', err);
        });
    connection
        .sync({
            logging: console.log,
            force: true
        })
        .then(() => {
            console.log('connection to database estabilished successfully.');
            app.listen(port, () => {
                console.log('running server on port' + port);

            });
        })
        .catch(err => {
            console.error('unable to connect to the database', err);
        });
    if (i == 1) {
        connection.query('truncate table users');
    }
    if (i == 0) {
        const { Client } = require('pg')
        const client = new Client({
            user: "postgres",
            password: "p64266426",
            host: "localhost",
            port: 5432,
            database: "carti"

        })
        client.connect()

            .then(() => client.query('truncate table colles'))
    }

    var authenticateController = require('./controllers/authenticate-controller');
    var registerController = require('./controllers/register-controller');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/', function (req, res) {
        res.sendfile('./index.html');
    })
    app.get('/register.html', function (req, res) {
        res.sendfile('./register.html');
    })

    app.get('/login.html', function (req, res) {
        res.sendfile(__dirname + "/" + "login.html");
    })

    /* route to handle login and registration */
    app.post('/api/register', registerController.register1);
    app.post('/api/authenticate', authenticateController.authenticate);

    console.log(authenticateController);
    app.post('/controllers/register-controller', registerController.register1);
    app.post('/controllers/authenticate-controller', authenticateController.authenticate);

    module.exports = connection;
}
        
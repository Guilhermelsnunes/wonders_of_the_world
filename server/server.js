const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
.then((client) => {
    const db = client.db('wonders_db');

    const wondersCollection = db.collection('wonders');
    const wondersRouter = createRouter(wondersCollection);
    app.use('/api/wonders', wondersRouter);

    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);
    app.use('/api/users', usersRouter);
})
.catch(console.error)

app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port}`)
});
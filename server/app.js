const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://localhost:27017/test');

mongoose.connection.once('open', () => {
    console.log("open")
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('listening on port')
});
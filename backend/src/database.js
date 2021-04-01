const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI ? process.env.DB_URI : 
    'mongodb+srv://elektro:Elektro05@cluster0.watzr.mongodb.net/catalogos?retryWrites=true&w=majority';

mongoose.set('useFindAndModify', false);
mongoose.connect( DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('La DB esta arribaaa');
});

module.exports = mongoose;

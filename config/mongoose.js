require('dotenv').config();
//require the library
const mongoose = require('mongoose');

// here we are using the MongoDB Url (i.e. Mondodb Atlas)
const db = "mongodb+srv://jyotiyadav:12345@cluster0.dx0emas.mongodb.net/";

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Successfully connected to the database');
}).catch((err)=> console.log('Failed to connect to the database', err));
 

// acquire connection (to check if its successful)
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

// db.once('open', function () {
//   console.log('Connected to Database :: MongoDB');
// });

// module.exports = db;

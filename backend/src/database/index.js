const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true});
mongoose.Promise = global.Promise;
console.log('database conected');

module.exports = mongoose;
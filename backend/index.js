
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 5002

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', require('./src/routes'));

// start the server listening
app.listen(port, () => {
  console.log('Node app is running on port', port);
});


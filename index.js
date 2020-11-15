const express = require('express');
const path = require('path');
const app = express();
const PORT_NUMBER = process.env.PORT_NUMBER || 3500;

app.set('port', PORT_NUMBER);

app.use(express.static(path.join(__dirname, '/public')));

var server = app.listen(app.get('port'), () => {
    console.log('The server is running on http://localhost:' + app.get('port'));
});
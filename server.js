const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/carnaval-wie-ben-jij'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/carnaval-wie-ben-jij/' }
    );
});

app.listen(process.env.PORT || 8000);
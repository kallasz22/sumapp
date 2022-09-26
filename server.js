const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

app.post('/sum', function(req, res){
    console.log(`${req.body.a -(-req.body.b)}`);
    res.send(`${req.body.a -(-req.body.b)}`);
});

app.listen(5000);
const express = require('express')
const app = express()
const port = 3000
var functions = require('./functions');
var bodyParser = require('body-parser');


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* GET home page. */
app.get('/', function (req, res, next) {
    res.render('index.ejs', { title: 'Express' });
});

/* GET users listing. */
app.get('/users', function (req, res, next) {
    res.send('Reached new page');
});

/* sample HTTP call */
app.get('/sample', function (req, res, next) {
    console.log(functions.test()); 
    res.json({success : true, body : "HTTP request successful"}); 
});

app.post('/convert', function (req, res, next){
	console.log(req.body)
    let result = functions.assignment(req.body); //call function here; 
    res.json({success : true, body : result});  
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
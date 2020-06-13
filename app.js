const express = require('express')
const app = express()
const port = 3000


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
    res.json({success : true, body : "HTTP request successful"}); 
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
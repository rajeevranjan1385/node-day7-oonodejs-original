const express = require('express');
const app = express();
const database = require('./database');
const port = 8700;
const collName = 'eduJan';

app.get('/myData', (req, res) =>{
    let output = database.prototype.getData(collName);
    res.send(output);
});

app.post('/addData', (req, res)=>{
    var myData = {"name": "Rajeev", "class":"Node"};
    let output = database.prototype.insertData(collName, myData);
    res.send(output);
})

app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Server is listening at port ${port}`);
})
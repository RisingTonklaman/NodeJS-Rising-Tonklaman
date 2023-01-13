const chalk = require("chalk");
const morgan = require("morgan");
const debug = require("debug");
const express = require("express");
const path = require('path');
const app = express();
const port =  3000;

app.use(morgan('combined')); 
app.use(express.static(path.join(__dirname,'/Public/template')))

app.get('/' , (req,res) => {
    res.send('Authorised Rising Hopper!!!')


})

app.listen(port, () => {

    console.log('listening on port '+chalk.green(port));

})
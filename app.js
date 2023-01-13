const chalk = require("chalk");
const morgan = require("morgan");
const debug = require("debug");
const express = require("express");

const app = express()
const port =  3000

app.use(morgan('combined')); 

app.get('/' , (req,res) => {

    res.send('Authorised Rising Hopper!!!')


})
app.listen(port, () => {

    console.log('listening on port '+chalk.green(port));

})
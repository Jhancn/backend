const express = require('express');
const app = express();


app.get('/', (req,res) =>{
    console.log(
        'hello CG')
    })

app.listen(3000)
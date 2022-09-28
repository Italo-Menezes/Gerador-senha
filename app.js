const express = require('express');
const app = express();
const path = require('path')


const routerIndex = require('./routes/index')

app.use('/', routerIndex)

app.use(express.static(path.join(__dirname, '/public')));
app.listen(3000,()=>{console.log('servidor rodando...')});
require('@babel/register');
const express = require('express');

const mainRouter = require('./routes/main.routes');

const PORT = 4000;
const app = express();

app.use('/', mainRouter);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

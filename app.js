require('@babel/register');
const express = require('express');

const configServer = require('./config/configServer');
const mainRouter = require('./routes/views/main.routes');
const authRouter = require('./routes/views/auth.routes');
const authApiRouter = require('./routes/api/auth.routes');
const routesRouter = require('./routes/views/routes.routes');
const routesApiRouter = require('./routes/api/routes.routes');

const cookieRouter = require('./routes/api/cookies.routes');

const PORT = 4000;
const app = express();

configServer(app);

app.locals.title = 'AI Startups';

app.use(express.static('public'));

app.use('/', mainRouter);
app.use('/', cookieRouter);
app.use('/auth', authRouter);
app.use('/auth', authApiRouter);
app.use('/routes', routesRouter);
app.use('/api/routes', routesApiRouter);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

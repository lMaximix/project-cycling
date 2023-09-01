const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const configSession = require('./configSession');

const ssr = require('../middlewares/ssr');
const getUser = require('../middlewares/getUser');

function configServer(app) {
  /* мидлварка, которая позволит нам работать с куками на сервере */
  app.use(cookieParser());

  app.use(session(configSession));

  /* мидлварка, чтобы посмотреть, кто у нас сидит на сайте */
  app.use(getUser);
  app.use(ssr);

  app.use(express.static(path.join(__dirname, '../public')));
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
}

module.exports = configServer;

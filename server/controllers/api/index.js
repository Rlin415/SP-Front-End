"use strict";

const express = require('express'),
  subscribe = require('./subscribe');

const apiRouter = express.Router();

apiRouter.post('/subscribe', subscribe.signUp);

module.exports = apiRouter;

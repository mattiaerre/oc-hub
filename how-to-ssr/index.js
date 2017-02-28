const debug = require('debug')('how-to-ssr:index');
const express = require('express');
const favicon = require('express-favicon-short-circuit');
const path = require('path');
const index = require('./routes');

const app = express();
app.locals.pretty = true;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon);

app.use('/', index);

const port = process.env.PORT || 3000;
const server = app.listen(port);

server.on('listening', () => {
  debug(`http://127.0.0.1:${port}`);
});

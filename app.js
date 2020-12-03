const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const {sessionSecret} = require("./config/index")
const tasksRouter = require('./routes/tasks')

const app = express();
const { restoreUser } = require('./auth.js')

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
  })
);

// create Session table if it doesn't already exist
store.sync();
app.use((req, res, next) => {
  // Attempt to get the `history` array from session.
  // If it's not initialized, then create an array
  // and assigned it back to session.
  let { history } = req.session;
  if (!history) {
    history = [];
    req.session.history = history;
  }
  const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

  history.unshift(url);
   next();
});
app.use(restoreUser);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('api/tasks', tasksRouter); 

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

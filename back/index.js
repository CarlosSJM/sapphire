const config        = require('./config');
const express       = require('express');
const createError   = require('http-errors');
const path          = require('path');
const http          = require('http');
const cors          = require('cors');
const jwt           = require('jsonwebtoken');

const loginRouter   = require('./routes/login');
const indexRouter   = require('./routes/index');
const videoRouter   = require('./routes/video');

const index = express();

// view engine setup
index.set('views', path.join(__dirname, 'views'));
index.set('view engine', 'ejs');

index.use(cors({
  origin: 'http://localhost:4200'
}));
index.use(express.json());
index.use(express.urlencoded({ extended: false }));
index.use(express.static(path.join(__dirname, 'public')));

index.use('/auth', loginRouter);
index.use('/', videoRouter);
const authMiddleware = async(request, response, next)=>{
  // console.log(request.query.authorization);
  if(request.headers.authorization){
    // let bearer = request.headers.authorization;
    // let token = bearer.split(" ")[1];
    let token = request.headers.authorization;
    jwt.verify(token, config.jwt.api_key, { algorithm: "HS512" ,expiresIn: (1000*60*60*24)*7}) ?
      await next() : response.json({'ok': false, fails:[{"error": "Unauthorized access."}]});
  }
};
index.use('/', authMiddleware, indexRouter);

// catch 404 and forward to error handler
index.use(function(req, res, next) {
  next(createError(404));
});

// error handler
index.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

http.createServer(index).listen(config.http.port, ()=>{
  console.log('Server listening on *:3000');
});

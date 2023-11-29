var express = require('express');
var cookieParser = require('cookie-parser');
var bluebird = require('bluebird');
var cors = require('cors');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api'); //Custom

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Habilita el envío de cookies
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));





//Indico las rutas de los endpoint
app.use('/api', apiRouter);
app.use('/', indexRouter);


//onsole.log("processENV",process.env);
if (process.env.NODE_ENV === 'Development') {
  require('./config').config();
}


//Database connection --
var mongoose = require('mongoose')
mongoose.Promise = bluebird;
let url = `${process.env.DATABASE1}${process.env.DATABASE2}=${process.env.DATABASE3}=${process.env.DATABASE4}`
console.log("BD",url);
let opts = {
  useNewUrlParser : true, 
  connectTimeoutMS:20000, 
  useUnifiedTopology: true
  };

mongoose.connect(url,opts)
  .then(() => {
    console.log(`Succesfully Connected to theMongodb Database..`)
  })
  .catch((e) => {
    console.log(`Error Connecting to the Mongodb Database...`),
    console.log(e)
  })


  const port = process.env.PORT || 3000;
  app.listen(port, 'localhost', function () {
    console.log(`Express está escuchando en el puerto ${port}`);
  });
  


module.exports = app;
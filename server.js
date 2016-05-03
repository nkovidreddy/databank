 // get the things we need
 var express = require('express');
 var app = express();
 var path = require('path');
 var bodyParser = require('body-parser'); // get body-parser

var port=process.env.PORT || 8899;
var PythonShell = require('python-shell');
 
var apiRouter = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());






app.use('/api', apiRouter);
 // set the public folder to serve public assets
 app.use(express.static(__dirname + '/public'));

 // set up our one route to the index.html file
 app.get('/', function(req, res) {
 res.sendFile(path.join(__dirname + '/public/views/index.html'));
 });


//Configuring Routes

//database
apiRouter.route('/printhello')

.get(function(req, res) {
//Build a RESTful Node API 70
console.log("Print Hello");
var options = {
  mode: 'text',
  pythonPath: 'python',
  pythonOptions: ['-u'],
  scriptPath: __dirname+'/public/scripts',
  args: ['value1', 'value2', 'value3']
};
 
PythonShell.run('my_script.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution 
  console.log('results: %j', results);
});

res.json("Hello Calling Get Function");
 
 });


 // start the server on port 8080 (http://localhost:8080)
app.listen(port);
console.log('listening to port' +port);
//setting public folder
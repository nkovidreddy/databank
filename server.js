 // get the things we need
 var express = require('express');
 var app = express();
 var path = require('path');
 var bodyParser = require('body-parser'); // get body-parser

var http = require("http");
var https = require("https");
var querystring = require("querystring");
var fs = require('fs');

var port=process.env.PORT || 9999;
var PythonShell = require('python-shell');
 
var apiRouter = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
 app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \
 Authorization');
 next();
 });



app.use('/api', apiRouter);
 // set the public folder to serve public assets
 app.use(express.static(__dirname + '/public'));

 // set up our one route to the index.html file
 app.get('/', function(req, res) {
 res.sendFile(path.join(__dirname + '/public/index.html'));
 });

app.get('/getanalytics', function(req, res) {
 res.sendFile(path.join(__dirname + '/public/getanalytics.html'));
 });

app.get('/home', function(req, res) {
 res.sendFile(path.join(__dirname + '/public/home.html'));
 });

//Configuring Routes

//database
apiRouter.route('/getScore')

.get(function(req, res) {


 var reqVal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
       
    var data={
  "Inputs": {
    "input1": {
      "ColumnNames": [
        "default",
        "previous",
        "euribor3m",
        "job_admin.",
        "job_blue-collar",
        "job_entrepreneur",
        "job_housemaid",
        "job_management",
        "job_retired",
        "job_self-employed",
        "job_services",
        "job_student",
        "job_technician",
        "job_unemployed",
        "job_unknown",
        "poutcome_failure",
        "poutcome_nonexistent",
        "poutcome_success",
        "contactType",
        "outcome"
      ],
      "Values": [
        reqVal
      ]
    }
  }
}; 
    var dataString = JSON.stringify(data);

    var host = 'asiasoutheast.services.azureml.net'

    var path = '/workspaces/5c14252f472e4bbc9facde7df84af4d0/services/e139c36dae67441aa7b9f7e041d4cae7/execute?api-version=2.0&details=true'

    var method = 'POST'

    var api_key = 'SMuXVYeJ9mo8O6tBUMUGFrRf+lzpyKf0ZVU21OG/UyWQ7iV5xKLM5/zpRMvAOfNa+jseESKJ23RRTSWrSiAM9w=='

    var headers = {'Content-Type':'application/json', 'Authorization':'Bearer ' + api_key};

    

    var options = {

        host: host,

        port: 443,

        path: path,

        method: 'POST',

        headers: headers

    };

    

    console.log('data: ' + data);

    console.log('method: ' + method);

    console.log('api_key: ' + api_key);

    console.log('headers: ' + headers);

    console.log('options: ' + options);

        
	var responseData = '';
    var reqPost = https.request(options, function (resp) {

    	var respDataVal = resp.body;
    	respDataVal = JSON.stringify(respDataVal);
    	console.log(respDataVal);
    	console.log('status:' , resp.body);
        // console.log('===reqPost()===');

        // console.log('StatusCode: ', resp.statusCode);

        // console.log('headers: ', resp.headers);

        // console.log(resp);
 

        resp.on('data', function(d) {

        	process.stdout.write(d);
        	var json = JSON.parse(d);
        	json = JSON.stringify(json);
        	console.log("test");
        	//console.log(test);
        	console.log(json);
            res.json(json);

        });

    

    });

    

    // Would need more parsing out of prediction from the result

    reqPost.write(dataString);


    reqPost.end();

    reqPost.on('error', function(e){

        console.error(e);

    });

    






//Build a RESTful Node API 70
// console.log("Print Hello");
// var options = {
//   mode: 'text',
//   pythonPath: 'python',
//   pythonOptions: ['-u'],
//   scriptPath: __dirname+'/public/scripts',
//   args: ['value1', 'value2', 'value3']
// };
 
// PythonShell.run('my_script.py', options, function (err, results) {
//   if (err) throw err;
//   // results is an array consisting of messages collected during execution 
//   console.log('results: %j', results);
//   res.json(results);
// });


 
 })


//Decision Tree
 apiRouter.route('/getScore/:reqValues')

.get(function(req, res) {

var reqValFinal=[];
var reqVal=req.params.reqValues;
reqVal = reqVal.split(",");
console.log(reqVal);
       
    var data={
  "Inputs": {
    "input1": {
      "ColumnNames": [
        "default",
        "previous",
        "euribor3m",
        "job_admin.",
        "job_blue-collar",
        "job_entrepreneur",
        "job_housemaid",
        "job_management",
        "job_retired",
        "job_self-employed",
        "job_services",
        "job_student",
        "job_technician",
        "job_unemployed",
        "job_unknown",
        "poutcome_failure",
        "poutcome_nonexistent",
        "poutcome_success",
        "contactType",
        "outcome"
      ],
      "Values": [
        reqVal
      ]
    }
  }
}; 
    var dataString = JSON.stringify(data);

    var host = 'asiasoutheast.services.azureml.net'

    var path = '/workspaces/5c14252f472e4bbc9facde7df84af4d0/services/e139c36dae67441aa7b9f7e041d4cae7/execute?api-version=2.0&details=true'

    var method = 'POST'

    var api_key = 'SMuXVYeJ9mo8O6tBUMUGFrRf+lzpyKf0ZVU21OG/UyWQ7iV5xKLM5/zpRMvAOfNa+jseESKJ23RRTSWrSiAM9w=='

    var headers = {'Content-Type':'application/json', 'Authorization':'Bearer ' + api_key};

    

    var options = {

        host: host,

        port: 443,

        path: path,

        method: 'POST',

        headers: headers

    };

    

    console.log('data: ' + data);

    console.log('method: ' + method);

    console.log('api_key: ' + api_key);

    console.log('headers: ' + headers);

    console.log('options: ' + options);

        
	var responseData = '';
    var reqPost = https.request(options, function (resp) {
    	var respDataVal = resp.body;
    	respDataVal = JSON.stringify(respDataVal);
    	resp.on('data', function(d) {
        	process.stdout.write(d);
        	var json = JSON.parse(d);
        	json = JSON.stringify(json);
        	console.log("test");
        	//console.log(test);
        	console.log(json);
            res.json(json);

        });
    });

    // Would need more parsing out of prediction from the result
    reqPost.write(dataString);
   reqPost.end();
    reqPost.on('error', function(e){
        console.error(e);
    });

 })

 apiRouter.route('/getScore1')

.get(function(req, res) {


 })

//Decision Forest
 apiRouter.route('/getScore1/:reqValues')

.get(function(req, res) {

var reqValFinal=[];
var reqVal=req.params.reqValues;
reqVal = reqVal.split(",");
console.log(reqVal);
       
    var data={
  "Inputs": {
    "input1": {
      "ColumnNames": [
        "default",
        "previous",
        "euribor3m",
        "job_admin.",
        "job_blue-collar",
        "job_entrepreneur",
        "job_housemaid",
        "job_management",
        "job_retired",
        "job_self-employed",
        "job_services",
        "job_student",
        "job_technician",
        "job_unemployed",
        "job_unknown",
        "poutcome_failure",
        "poutcome_nonexistent",
        "poutcome_success",
        "contactType",
        "outcome"
      ],
      "Values": [
        reqVal
      ]
    }
  }
}; 
    var dataString = JSON.stringify(data);

    var host = 'asiasoutheast.services.azureml.net'

    var path = '/workspaces/5c14252f472e4bbc9facde7df84af4d0/services/59a1263518834aa2a60fa7b0527401fe/execute?api-version=2.0&details=true'

    var method = 'POST'

    var api_key = 'URjiFBaG6xi/k7i6MPNZGT24E8EzUMDwVcXEoz2UF6af0dT+dJFY5F5lUggcObO2xYdSHXBLldmmaNxpcvTKmQ=='

    var headers = {'Content-Type':'application/json', 'Authorization':'Bearer ' + api_key};

    

    var options = {

        host: host,

        port: 443,

        path: path,

        method: 'POST',

        headers: headers

    };

    

    console.log('data: ' + data);

    console.log('method: ' + method);

    console.log('api_key: ' + api_key);

    console.log('headers: ' + headers);

    console.log('options: ' + options);

        
	var responseData = '';
    var reqPost = https.request(options, function (resp) {
    	var respDataVal = resp.body;
    	respDataVal = JSON.stringify(respDataVal);
    	resp.on('data', function(d) {
        	process.stdout.write(d);
        	var json = JSON.parse(d);
        	json = JSON.stringify(json);
        	console.log("test");
        	//console.log(test);
        	console.log(json);
            res.json(json);

        });
    });

    // Would need more parsing out of prediction from the result
    reqPost.write(dataString);
   reqPost.end();
    reqPost.on('error', function(e){
        console.error(e);
    });

 })

 apiRouter.route('/getScore2')

.get(function(req, res) {


 })

//Support Vector Machine
 apiRouter.route('/getScore2/:reqValues')

.get(function(req, res) {

var reqValFinal=[];
var reqVal=req.params.reqValues;
reqVal = reqVal.split(",");
console.log(reqVal);
       
    var data={
  "Inputs": {
    "input1": {
      "ColumnNames": [
        "default",
        "previous",
        "euribor3m",
        "job_admin.",
        "job_blue-collar",
        "job_entrepreneur",
        "job_housemaid",
        "job_management",
        "job_retired",
        "job_self-employed",
        "job_services",
        "job_student",
        "job_technician",
        "job_unemployed",
        "job_unknown",
        "poutcome_failure",
        "poutcome_nonexistent",
        "poutcome_success",
        "contactType",
        "outcome"
      ],
      "Values": [
        reqVal
      ]
    }
  }
}; 
    var dataString = JSON.stringify(data);

    var host = 'asiasoutheast.services.azureml.net'

    var path = '/workspaces/5c14252f472e4bbc9facde7df84af4d0/services/cab3dca99ef44dd683692e211df9c164/execute?api-version=2.0&details=true'

    var method = 'POST'

    var api_key = 'vlVrLWpS/msEockwTI2neRi7Iy1OlBrl9pLKA/akXn8We+1G5Y+Cp53e5Up7pIZxROUIDWdgPHTFHtPjofjiuw=='

    var headers = {'Content-Type':'application/json', 'Authorization':'Bearer ' + api_key};

    

    var options = {

        host: host,

        port: 443,

        path: path,

        method: 'POST',

        headers: headers

    };

    

    console.log('data: ' + data);

    console.log('method: ' + method);

    console.log('api_key: ' + api_key);

    console.log('headers: ' + headers);

    console.log('options: ' + options);

        
	var responseData = '';
    var reqPost = https.request(options, function (resp) {
    	var respDataVal = resp.body;
    	respDataVal = JSON.stringify(respDataVal);
    	resp.on('data', function(d) {
        	process.stdout.write(d);
        	var json = JSON.parse(d);
        	json = JSON.stringify(json);
        	console.log("test");
        	//console.log(test);
        	console.log(json);
            res.json(json);

        });
    });

    // Would need more parsing out of prediction from the result
    reqPost.write(dataString);
   reqPost.end();
    reqPost.on('error', function(e){
        console.error(e);
    });

 })



 apiRouter.route('/getScore3')

.get(function(req, res) {


 })

//Neural Networks
 apiRouter.route('/getScore3/:reqValues')

.get(function(req, res) {

var reqValFinal=[];
var reqVal=req.params.reqValues;
reqVal = reqVal.split(",");
console.log(reqVal);
       
    var data={
  "Inputs": {
    "input1": {
      "ColumnNames": [
        "default",
        "previous",
        "euribor3m",
        "job_admin.",
        "job_blue-collar",
        "job_entrepreneur",
        "job_housemaid",
        "job_management",
        "job_retired",
        "job_self-employed",
        "job_services",
        "job_student",
        "job_technician",
        "job_unemployed",
        "job_unknown",
        "poutcome_failure",
        "poutcome_nonexistent",
        "poutcome_success",
        "contactType",
        "outcome"
      ],
      "Values": [
        reqVal
      ]
    }
  }
}; 
    var dataString = JSON.stringify(data);

    var host = 'asiasoutheast.services.azureml.net'

    var path = '/workspaces/5c14252f472e4bbc9facde7df84af4d0/services/0efc08c990de4962a5ade0a30fd45b09/execute?api-version=2.0&details=true'

    var method = 'POST'

    var api_key = 'jcfFGHxWa4EcC3+o+jejSpgoYGbfycHlYaZS7H+9uPRSI/FCOd2suxZiCrK4iHHI9B6yEzlGm+y88XuDJJuaaw=='

    var headers = {'Content-Type':'application/json', 'Authorization':'Bearer ' + api_key};

    

    var options = {

        host: host,

        port: 443,

        path: path,

        method: 'POST',

        headers: headers

    };

    

    console.log('data: ' + data);

    console.log('method: ' + method);

    console.log('api_key: ' + api_key);

    console.log('headers: ' + headers);

    console.log('options: ' + options);

        
	var responseData = '';
    var reqPost = https.request(options, function (resp) {
    	var respDataVal = resp.body;
    	respDataVal = JSON.stringify(respDataVal);
    	resp.on('data', function(d) {
        	process.stdout.write(d);
        	var json = JSON.parse(d);
        	json = JSON.stringify(json);
        	console.log("test");
        	//console.log(test);
        	console.log(json);
            res.json(json);

        });
    });

    // Would need more parsing out of prediction from the result
    reqPost.write(dataString);
   reqPost.end();
    reqPost.on('error', function(e){
        console.error(e);
    });

 })

 apiRouter.route('/getScore4')

.get(function(req, res) {


 })

//Logical Regrression
 apiRouter.route('/getScore4/:reqValues')

.get(function(req, res) {

var reqValFinal=[];
var reqVal=req.params.reqValues;
reqVal = reqVal.split(",");
console.log(reqVal);
       
    var data={
  "Inputs": {
    "input1": {
      "ColumnNames": [
        "default",
        "previous",
        "euribor3m",
        "job_admin.",
        "job_blue-collar",
        "job_entrepreneur",
        "job_housemaid",
        "job_management",
        "job_retired",
        "job_self-employed",
        "job_services",
        "job_student",
        "job_technician",
        "job_unemployed",
        "job_unknown",
        "poutcome_failure",
        "poutcome_nonexistent",
        "poutcome_success",
        "contactType",
        "outcome"
      ],
      "Values": [
        reqVal
      ]
    }
  }
}; 
    var dataString = JSON.stringify(data);

    var host = 'asiasoutheast.services.azureml.net'

    var path = '/workspaces/5c14252f472e4bbc9facde7df84af4d0/services/bb22cab6405843649efbd4fc036d4670/execute?api-version=2.0&details=true'

    var method = 'POST'

    var api_key = 'F6/qR84FozM5IiSSaQ9KVlChDnHdkfITwMggF0WwrdYqonzqWStLj4F1T/F67B9fhr6u4LJ6NYmq8F/OllHmiA=='

    var headers = {'Content-Type':'application/json', 'Authorization':'Bearer ' + api_key};

    

    var options = {

        host: host,

        port: 443,

        path: path,

        method: 'POST',

        headers: headers

    };

    

    console.log('data: ' + data);

    console.log('method: ' + method);

    console.log('api_key: ' + api_key);

    console.log('headers: ' + headers);

    console.log('options: ' + options);

        
	var responseData = '';
    var reqPost = https.request(options, function (resp) {
    	var respDataVal = resp.body;
    	respDataVal = JSON.stringify(respDataVal);
    	resp.on('data', function(d) {
        	process.stdout.write(d);
        	var json = JSON.parse(d);
        	json = JSON.stringify(json);
        	console.log("test");
        	//console.log(test);
        	console.log(json);
            res.json(json);

        });
    });

    // Would need more parsing out of prediction from the result
    reqPost.write(dataString);
   reqPost.end();
    reqPost.on('error', function(e){
        console.error(e);
    });

 });







 // start the server on port 8080 (http://localhost:8080)
app.listen(port);
console.log('listening to port' +port);
//setting public folder
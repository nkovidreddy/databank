//naming angular application
angular.module('masters', ['routerRoutes'])
//angular.module('symptomCheckerApp', [])

 .controller('mainController', ['$scope',function($scope){
 	//binding to view model
  var vm = this;
 	//defining a single variable message
  console.log("In Main Controller");
    
 }])

 .controller('analyticsController', ['$scope','$http',function($scope,$http){
    //$http.defaults.useXDomain = true;
 	var vm=this;
    console.log("In Analytics Controller");
    vm.getAnalysis=function(){
        var reqVal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        console.log("Inside Get Analysis Function");
        var euribor=vm.euribor;
        var previousValues = vm.previousVal;
        if(euribor!=null){
            reqVal[2]=euribor;
        }
        if(previousValues!=null){
            reqVal[1]=previousValues;
        }
        //var defaultValue=0;
        if(vm.defaultVal=='Yes'){
            reqVal[0]=1
        }
        if(vm.job=='job_admin.'){
            reqVal[3]=1;
        }
        if(vm.job=='job_blue-collar'){
            reqVal[4]=1;
        }
        if(vm.job=='job_entrepreneur'){
            reqVal[5]=1;
        }
        if(vm.job=='job_housemaid'){
            reqVal[6]=1;
        }
        if(vm.job=='job_management'){
            reqVal[7]=1;
        }
         if(vm.job=='job_retired'){
            reqVal[8]=1;
        }
        if(vm.job=='job_self-employed'){
            reqVal[9]=1;
        }
        if(vm.job=='job_services'){
            reqVal[10]=1;
        }
        if(vm.job=='job_student'){
            reqVal[11]=1;
        }
        if(vm.job=='job_technician'){
            reqVal[12]=1;
        }
        if(vm.job=='job_unemployed'){
            reqVal[13]=1;
        }
        if(vm.job=='job_unknown'){
            reqVal[14]=1;
        }
        if(vm.poutcome=='poutcome_failure'){
            reqVal[15]=1;
        }
        if(vm.poutcome=='poutcome_nonexistent'){
            reqVal[16]=1;
        }
        if(vm.poutcome=='poutcome_success'){
            reqVal[17]=1;
        }
        if(vm.contacttype=='Telephone'){
            reqVal[18]=1;
        }
        console.log(reqVal);
       

       var testURL = '/api/getScore/'+reqVal;
       console.log(testURL);


//Decision Tree
var scoreValueReq = {
        url:'/api/getScore/'+reqVal,
        method: 'GET'
       }

$http(scoreValueReq).then(function(data){
        console.log("Fetching Score:");
       // console.log(data.data);
        var test = data.data;
        test=JSON.parse(test);
        var finalResult = test.Results.output1.value.Values[0];
        $scope.scoreResDT = finalResult[20];
        $scope.scoreProbDT = finalResult[21];
        console.log($scope.scoreResDT);
        console.log($scope.scoreProbDT);
    })

//Decision Forest
var scoreValueReq1 = {
        url:'/api/getScore1/'+reqVal,
        method: 'GET'
       }

$http(scoreValueReq1).then(function(data1){
        console.log("Fetching Score:");
       // console.log(data.data);
        var test1 = data1.data;
        test1=JSON.parse(test1);
        var finalResult1 = test1.Results.output1.value.Values[0];
        $scope.scoreResDF = finalResult1[20];
        $scope.scoreProbDF = finalResult1[21];
        console.log($scope.scoreResDF);
        console.log($scope.scoreProbDF);
    })

//Support Vector Machine
var scoreValueReq2 = {
        url:'/api/getScore2/'+reqVal,
        method: 'GET'
       }

$http(scoreValueReq2).then(function(data2){
        console.log("Fetching Score:");
       // console.log(data.data);
        var test2 = data2.data;
        test2=JSON.parse(test2);
        var finalResult2 = test2.Results.output1.value.Values[0];
        $scope.scoreResSVM = finalResult2[20];
        $scope.scoreProbSVM = finalResult2[21];
        console.log($scope.scoreResSVM);
        console.log($scope.scoreProbSVM);
    })

//Neural Network
var scoreValueReq3 = {
        url:'/api/getScore3/'+reqVal,
        method: 'GET'
       }

$http(scoreValueReq3).then(function(data3){
        console.log("Fetching Score:");
       // console.log(data.data);
        var test3 = data3.data;
        test3=JSON.parse(test3);
        var finalResult3 = test3.Results.output1.value.Values[0];
        $scope.scoreResNN = finalResult3[20];
        $scope.scoreProbNN = finalResult3[21];
        console.log($scope.scoreResNN);
        console.log($scope.scoreProbNN);
    })

//Logistic Regression
var scoreValueReq4 = {
        url:'/api/getScore4/'+reqVal,
        method: 'GET'
       }

$http(scoreValueReq4).then(function(data4){
        console.log("Fetching Score:");
       // console.log(data.data);
        var test4 = data4.data;
        test4=JSON.parse(test4);
        var finalResult4 = test4.Results.output1.value.Values[0];
        $scope.scoreResLR = finalResult4[20];
        $scope.scoreProbLR = finalResult4[21];
        console.log($scope.scoreResLR);
        console.log($scope.scoreProbLR);
    })

    }
   console.log("In Analytics Controller");
 }])

 .controller('homeController', ['$scope',function($scope,$http){
    var vm=this;
    vm.message="In home kovid";
    console.log("In Analytics home Controller");
    vm.getAnalysis=function(){
        console.log("Inside Get Analysis Function");
    }
   console.log("In Analytics Controller");
 }]);


 



 
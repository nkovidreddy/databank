//naming angular application
angular.module('masters', ['routerRoutes'])
//angular.module('symptomCheckerApp', [])


 .controller('symptomController', ['$scope',function($scope){
 	//binding to view model
  var vm = this;
 	//defining a single variable message
 	vm.message= 'Hey there! Kovid Symptom Checker Page';
 	//for adding new data
 	vm.computerData ={};
 	vm.addComputer=function(){

 		//add a computer to list
 		vm.computers.push({
 			name:vm.computerData.name,
 			color:vm.computerData.color,
 			nerdness:vm.computerData.nerdness
 		});
 		console.log("New Computer Added");
 		vm.computerData ={};
 	};
 		
 	//defining a list of items
 	vm.computers = [
 		{ name: 'Macbook Pro' , color:'Silver' , nerdness: 10 },
 		{ name: 'Chromebook' ,  color:'Black' , nerdness: 8 },
 		{ name: 'Yoga Pro' ,  color:'Gray' , nerdness: 7 }
 	];
 }])

 .controller('homeController', ['$scope',function($scope,$http){
 	var vm=this;
   console.log($scope);
   vm.message='This is the home page!';
  	vm.search= function(){
 		console.log(vm.text);
 	  var req = {
      url: '/api/textapi', // No need of IP address /users
      method: 'POST',
      data: {'data':vm.text},
      headers: {'Content-Type': 'application/json',
  				'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9lIiwidXNlcm5hbWUiOiJqb2UiLCJpYXQiOjE0NTg0Mzg3NDQsImV4cCI6MTQ1ODUyNTE0NH0.l-jvW4YZW7-zuRy2uCKiW60J3W6pySBFWA_-UtsOv7w'}
	  
      }
      $http(req).then(function(data){
      	console.log(data.data.entities.keyword);
      	vm.resultText=data.data.entities.keyword;
      })
     // console.log(vm.search);
 	}
 }])

.controller('aboutController', function(){
 	var vm=this;
 	vm.frameName='symptom-checker';
 	vm.frameUrl='/';
 	vm.message='This is the about page!';
 })



.controller('contactController', function(){
 	var vm=this;
  vm.load=function(){
    alert("load event detected!");
  };
 	vm.message='This is the contact page!';
 });


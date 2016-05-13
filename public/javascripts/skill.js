var app = angular.module('skillBase', []);



app.controller('MainCtrl', [
'$scope','$http',function($scope,$http){
  $scope.login = function(){
    window.location.href = "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=75bzguz7ax598t&redirect_uri=http://localhost:8080&state=DCEeFWf45A53sdfKef424&scope=r_basicprofile";
    }

}]);

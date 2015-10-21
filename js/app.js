
   var app = angular.module("eve", ["ui.bootstrap", "ngSanitize"]);
   
   var blogger_api_key = "AIzaSyCkEcxsMt3bfI9JJyN_hoLznEnYakCOR64"; // "AIzaSyDeYPnn4gOcfitqdIWHMBR6oWuT6EOv2zQ";
   var RestBaseUrl = "https://www.googleapis.com/blogger/v3/blogs/4636194870453825564"; //7068809791937788032";
   
   app.controller("FeedCtrl", ["$scope", "$http", function($scope, $http) {
    
    $scope.posts = [];
    
    $http({
        url: RestBaseUrl + "/posts",
        params: {
            key: blogger_api_key
        },
        method: 'GET'
    }).then(function(res){
        $scope.posts = res.data.items;
        console.log(res);
    }, function(err) {
        $scope.posts=[];
    });

   }]);


   var app = angular.module("eve", ["ui.bootstrap", "ngSanitize"]);
   
   var blogger_api_key = "AIzaSyDeYPnn4gOcfitqdIWHMBR6oWuT6EOv2zQ";
   var RestBaseUrl = "https://www.googleapis.com/blogger/v3/blogs/7068809791937788032";
   
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

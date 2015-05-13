'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  .when('/view2', {
    templateUrl: 'tmpl/view2.html',
    controller: 'View2Ctrl'
  })
  .when('/view1', {
    templateUrl: 'tmpl/view1.html',
    controller: 'View1Ctrl'
  })
  .otherwise({redirectTo: '/view1'});
}])

.controller('View2Ctrl', ['$scope',function($scope) {
    $scope.var_x=2000;
}])

.controller('View1Ctrl', ['$scope',function($scope) {
    $scope.var_x=1000;
}]);

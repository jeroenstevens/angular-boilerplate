angular.module('MyApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/'
  });

}]);

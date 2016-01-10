var notebookApp = angular
  .module('notebookApp', [
    'ngRoute',
    'notebookControllers'
]);

notebookApp.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {  
  $locationProvider.html5Mode(true);  
  $routeProvider.    
    when('/notebook/:area/:topic/:item', {
      templateUrl: '/notebook/templates/main.html',
      controller: 'dataController',
      controllerAs: 'vm'
    }).
    when('/notebook/:area/:topic', {
      templateUrl: '/notebook/templates/main.html',
      controller: 'dataController',
      controllerAs: 'vm'
    }).
    when('/notebook/:area', {
      templateUrl: '/notebook/templates/main.html',
      controller: 'dataController',
      controllerAs: 'vm'
    }).
    when('/notebook', {
      templateUrl: '/notebook/templates/main.html',
      controller: 'dataController',
      controllerAs: 'vm'
    }).    
    otherwise({
      redirectTo: '/notebook'
    });       
}]);
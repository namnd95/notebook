var notebookApp = angular
  .module('notebookApp', [
    'ngRoute',
    'notebookControllers'
]);

notebookApp.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {  
  $locationProvider.html5Mode(true);
  alert('abc');  
  $routeProvider.    
    when('/:area/:topic/:item', {
      templateUrl: '/notebook/templates/main.html',
      controller: 'dataController'
      //controllerAs: 'vm'
    }).
    when('/:area/:topic', {
      templateUrl: '/notebook/templates/main.html',
      controller: 'dataController'
      //controllerAs: 'vm'
    }).
    when('/:area', {
      templateUrl: '/notebook/templates/main.html',
      controller: 'dataController'
      //controllerAs: 'vm'
    }).
    when('/', {
      templateUrl: '/notebook/templates/main.html',
      controller: 'dataController'
      //controllerAs: 'vm'
    }).
    otherwise({
      redirectTo: '/'
    });       
}]);
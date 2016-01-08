var notebookApp = angular
  .module('notebook', [
    'ngRoute',
    'notebookControllers'
]);

notebookApp.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'templates/main.html',
      controller: 'dataController',
      controllerAs: 'vm'
    }).      
    otherwise({
      redirectTo: '/'
    });
}]);
var notebookApp = angular
  .module('notebookApp', [
    'ngRoute',
    'notebookControllers'
]);

notebookApp.config(['$routeProvider',
function($routeProvider) {  
  $routeProvider.
    when('/main', {
      templateUrl: 'templates/main.html',      
    }).
    otherwise({
      redirectTo: '/main'
    });
}]);
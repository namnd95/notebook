var notebookControllers = angular.module('notebookControllers', []);

notebookControllers.controller('dataController', ['$http','$location',
  function($http, $location){    
    alert($location.path());
    alert('123');            
  }
]);
var notebookControllers = angular.module('notebookControllers', []);

notebookControllers.controller('dataController', ['$http','$location', '$sce', '$timeout', 
  function($http, $location, $sce, $timeout){    
    var vm = this;    
    var link = $location.path();
    link = link.replace('notebook','notebook/content');    
    
    vm.data_error = false;
    vm.response_error = false;
    
    $http.get('/notebook/content/data.json', { headers: {
          'Content-type': 'application/json'
        }
      }).then(function successCallback(response) {
        vm.data = response.data;        
      }, function errorCallback(response) {
        vm.data_error = true;
      });
    
    $http({method: 'GET', url: link
    }).then(function successCallback(response) {
        vm.response = $sce.trustAsHtml(response.data);
        $timeout(vm.updateMathJax, 0);
    }, function errorCallback(response) {
        vm.response_error = true;
    });
    
    vm.updateMathJax = function () {
          MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
  }  
]);

(function () {
  'use strict';

  angular.module('myApp').service('MainService', MainService);

  /** @ngInject */
  function MainService($http, $q) {

 


    var service = {};
    var serverPromise;

    service.getServerData = function () {
      if (serverPromise) {
        return serverPromise;
      }

      serverPromise = $http({method: 'GET', url: "https://raw.githubusercontent.com/Evo-Forge/ui-test/master/src/resources/MOCK_DATA_1000.json" 
      });

      return serverPromise;
    };


    return service;
  }
})();
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

      serverPromise = $http({method: 'GET', url: localURL
      });

      return serverPromise;
    };


    return service;
  }
})();
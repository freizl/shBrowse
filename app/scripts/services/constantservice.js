'use strict';

/**
 * @ngdoc service
 * @name ngBrxApp.constantService
 * @description
 * # constantService
 * Factory in the ngBrxApp.
 */
angular.module('ngBrxApp')
  .factory('constantService', function () {

    // Public API here
    return {
        pageSize: 20,
        keyCurrentLocale: 'currentLocale'
    };

  });

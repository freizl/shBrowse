'use strict';

/**
 * @ngdoc function
 * @name ngBrxApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the ngBrxApp
 */
angular.module('ngBrxApp')
  .controller('SearchCtrl', function ($scope, $location, searchApi) {
      var so = $location.search();

      $scope.so = JSON.stringify(so);
      searchApi.events(so);
  });

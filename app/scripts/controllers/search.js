'use strict';

/**
 * @ngdoc function
 * @name ngBrxApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the ngBrxApp
 */
angular.module('ngBrxApp')
  .controller('SearchCtrl', function ($scope, $location) {
      var so = $location.search();

      $scope.so = JSON.stringify(so);
  });

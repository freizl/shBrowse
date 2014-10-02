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

      $scope.pageSize = 20;

      searchApi.events(so)
          .success(function (data) {
              if (!!data) {
                  $scope.data = data;
              }
          });
  });

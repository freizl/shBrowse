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
      $scope.events = [];

      searchApi.events(so)
          .success(function (data) {
              if (!!data && data.numFound > 0) {
                  $scope.events = data.events;
                  $scope.hasTickets = true;
              }
          });
  });

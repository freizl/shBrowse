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

      $scope.hasTickets = false;

      searchApi.events(so)
          .success(function (data) {
              if (!!data && data.numFound > 0) {
                  $scope.events = data.events;

                  var absUrl = $location.absUrl().replace(/\&p=[0-9]+/, ''),
                      totalPages = Math.ceil(data.numFound / 20),
                      currentPage = so.p >= 1 ? Number(so.p) : 1,
                      nextPage = (currentPage + 1) > totalPages ? totalPages : (currentPage + 1),
                      prevPage = (currentPage - 1) == 0 ? currentPage : (currentPage - 1);

                  $scope.page = {
                      pageSize: 20,
                      nextPage: {num: nextPage , url: absUrl + '&p=' + nextPage},
                      prevPage: {num: prevPage , url: absUrl + '&p=' + prevPage},
                      totalPage: {num: totalPages , url: absUrl + '&p=' + totalPages},
                      pages: _.map([1,2,3,4,5,6,7], function (i) { return { num: i, url: absUrl + '&p=' + i };})
                  };
                  $scope.currentPage = function (p) { return p.num === currentPage ? 'current':'';};
                  $scope.hasTickets = true;
              }
          });
  });

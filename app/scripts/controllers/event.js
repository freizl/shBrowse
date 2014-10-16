;(function(angular, _){
    'use strict';

    /**
     * @ngdoc function
     * @name ngBrxApp.controller:EventCtrl
     * @description
     * # EventCtrl
     * Controller of the ngBrxApp
     */
    angular.module('ngBrxApp')
        .controller('EventCtrl', function ($scope, $routeParams, eventApi) {
            var eventId = $routeParams.eventId;

            $scope.eventId = eventId;

            eventApi.event(eventId)
                .success(function (data) {
                    $scope.event = _.pick(data, function (v, key) {
                        return _.contains(['currencyCode', 'description', 'eventDateLocal', 'eventDateUTC', 'timezone', 'hideEventDate', 'hideEventTime', 'integratedEventInd', 'title', 'venue'], key);
                    });

                });

            eventApi.tickets(eventId)
                .success(function (data) {
                    $scope.tickets = _.pick(data, function (v, key) {
                        return _.contains(['listing', 'totalListings', 'zone_stats'], key);
                    });
                    $scope.ticketUrl = function (ticket) {
                        return 'http://www.stubhub.com/?ticket_id=' + ticket.listingId;
                    };
                });

        });

})(angular, _);

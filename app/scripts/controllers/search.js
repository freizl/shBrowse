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

        searchApi.events(so)
            .success(function (data) {
                if (!!data) {
                    $scope.data = data;
                    $scope.eventUrl = function (event) {
                        var xs = [''],
                            eventId = '' + event.id,
                            eventUrl = event.eventUrl.replace('-' + eventId, '');

                        if (event.performers && event.performers.length >= 1) {
                            xs.push(event.performers[0].url);
                        }

                        return xs.concat([eventUrl, 'event', eventId]).join('/');
                    };
                }
            });
    });

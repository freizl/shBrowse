;(function(angular){
    'use strict';

    function generateEventUrl (event) {
        var eventId = '' + event.id,
            eventUrl = event.eventUrl.replace('-' + eventId, '');
        return '/event/' + eventUrl + '/' + eventId;
    }

    /**
     * @ngdoc function
     * @name ngBrxApp.controller:PerformerCtrl
     * @description
     * # PerformerCtrl
     * Controller of the ngBrxApp
     */
    angular.module('ngBrxApp')
        .controller('CategoryCtrl', function ($scope, $routeParams, $location, searchApi) {
            var so = $location.search(),
                params = _.extend({categoryId: $routeParams.categoryId}, so || {});

            searchApi.events(params)
                .success(function (data) {
                    if (!!data) {
                        $scope.data = data;
                        $scope.eventUrl = generateEventUrl;
                    }
                });
        });

})(angular);

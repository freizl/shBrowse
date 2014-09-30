;(function(angular, _) {
    'use strict';

    /**
     * @ngdoc service
     * @name ngBrxApp.search
     * @description
     * # search
     * Factory in the ngBrxApp.
     */
    angular.module('ngBrxApp')
        .factory('searchApi', ['$http', 'constantService', function ($http, constantService) {

            var BASE_URL = '/shape/search/catalog/',
                EVENTS_URL = BASE_URL + 'events/v3',
                SIZE = constantService.pageSize;

            var DEFAULT_OPTS = { minAvailableTickets: 1,
                                 limit: SIZE,
                                 //locale: 'en_US',
                                 sort: 'eventDateLocal asc',
                                 status: 'active'
                               };

            // Public API here
            return {
                events: function (params) {
                    if (!!params && params.p > 1) {
                        var start = (params.p - 1) * SIZE;
                    }
                    var data = angular.extend({},
                                              DEFAULT_OPTS,
                                              params || {},
                                              {start: start}
                                             );
                    return $http({method: 'GET', url: EVENTS_URL, params: data});
                }
            };
        }]);

})(angular, _);

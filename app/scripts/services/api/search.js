;(function(angular, _) {
    'use strict';

    function getTodayDateString () {
        var d = new Date(),
            m = '' + (d.getUTCMonth() + 1);
        m = m.length === 1 ? '0'+m : m;
        return [d.getUTCFullYear(), m, d.getUTCDate()].join('-') + 'T00:00';
    }

    /**
     * @ngdoc service
     * @name ngBrxApp.search
     * @description
     * # search
     * Factory in the ngBrxApp.
     */
    angular.module('ngBrxApp')
        .factory('searchApi', ['$http', 'C_PAGE_SIZE', function ($http, PAGE_SIZE) {

            var BASE_URL = '/shape/search/catalog/',
                EVENTS_URL = BASE_URL + 'events/v3',
                SIZE = PAGE_SIZE;

            var DEFAULT_OPTS = { minAvailableTickets: 1,
                                 limit: SIZE,
                                 //locale: 'en_US',
                                 fieldList: 'id,ticketInfo,name,eventDateLocal,venue,performers,eventUrl',
                                 sort: 'eventDateLocal asc',
                                 date: getTodayDateString() + ' TO 3014-10-15T00:00',
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

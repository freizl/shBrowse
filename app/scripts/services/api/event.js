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
        .factory('eventApi', ['$http', 'C_PAGE_SIZE', function ($http, PAGE_SIZE) {

            var BASE_URL = '/shape/search/catalog/',
                EVENTS_URL = BASE_URL + 'events/v3',
                SIZE = PAGE_SIZE;

            var DEFAULT_OPTS = {
                limit: SIZE
            };

            // Public API here
            return {
                event: function (eventId) {
                    var url = '/shape/catalog/events/v2/' + eventId;
                    return $http({method: 'GET', url: url});
                },

                tickets : function (eventId) {
                    var url = '/shape/search/inventory/v1/',
                        params = {start: 0,
                                  rows: SIZE,
                                  sort: 'currentprice asc',
                                  eventId: eventId,
                                  zoneStats: true,
                                  pricingSummary: true,
                                  listingAttributeCategorySummary: true,
                                  deliveryTypeSummary: true
                                 };
                    return $http({method: 'GET', url: url, params: params});
                }

            };
        }]);

})(angular, _);

;(function($, angular, _) {
    'use strict';

    /**
     * @ngdoc function
     * @name ngBrxApp.controller:NavCtrl
     * @description
     * # NavCtrl
     * Controller of the ngBrxApp
     */
    angular.module('ngBrxApp')
        .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
            var langs = [ { name: "US", value: 'en-us'},
                          { name: "ZH", value: 'zh-cn'}
                        ],
                p = $location.path();
            // FIXME: use click handler to append search parameter and reload page.
            $scope.langs = _.map(langs, function (v) {
                return _.extend({}, v, {url: $location.search('locale', v.value).path(p).url()});
            });
        }]);

})(jQuery, angular, _);

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
        .controller('NavCtrl', ['$scope', '$window', 'localStorageService', '$translate', 'C_LOCALE_KEY', function ($scope, $window, localStorageService, $translate, LOCALE_KEY) {
            var langs = [ { name: "US", value: 'en-us'},
                          { name: "ZH", value: 'zh-cn'},
                          { name: "DE", value: 'de-de'}
                        ];

            $scope.langs = langs;
            $scope.switchLang = function (v) {
                localStorageService.set(LOCALE_KEY, v);
                $window.location.reload(); // check stubhub.js about dynamic load i18n file.
            };
        }]);

})(jQuery, angular, _);

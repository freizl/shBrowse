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
        .controller('NavCtrl', ['$scope', '$window', 'localStorageService', 'constantService', function ($scope, $window, localStorageService, CS) {
            var langs = [ { name: "US", value: 'en-us'},
                          { name: "ZH", value: 'zh-cn'}
                        ];

            $scope.langs = langs;
            $scope.switchLang = function (v) {
                localStorageService.set(CS.keyCurrentLocale, v);
                $window.location.reload(); // check stubhub.js about dynamic load i18n file.
            };
        }]);

})(jQuery, angular, _);

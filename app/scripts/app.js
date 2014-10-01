;(function(angular, _, $, SH) {
    'use strict';

    /**
     * @ngdoc overview
     * @name ngBrxApp
     * @description
     * # ngBrxApp
     *
     * Main module of the application.
     */
    angular
        .module('ngBrxApp', [
            'ngAnimate',
            'ngCookies',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'LocalStorageModule',
            'pascalprecht.translate'
        ])
        .config(function ($routeProvider, $locationProvider, $httpProvider, localStorageServiceProvider, $translateProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'MainCtrl'
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                })
                .when('/search', {
                    templateUrl: 'views/search.html',
                    controller: 'SearchCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $httpProvider.defaults.headers.common.Authorization = SH.APP_TOKEN;
            $locationProvider.html5Mode(true);
            localStorageServiceProvider.setPrefix('stubhub');

            $translateProvider.useStaticFilesLoader({
                prefix: '/languages/',
                suffix: '.json'
            });

        })
        .value('appToken', SH.APP_TOKEN)
        .run(['$translate', 'localStorageService', 'constantService', function ($translate, localStorageService, CS) {
            var locale = localStorageService.get(CS.keyCurrentLocale);
            $translate.use( locale || 'en-us');
        }])
    ;

})(angular, _, jQuery, StubHub);

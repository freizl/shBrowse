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
            'LocalStorageModule'
        ])
        // .run(['localStorageService', 'constantService', function (localStorageService, CS) {
        //     _loadAngularI18N(localStorageService.get(CS.keyCurrentLocale));
        // }])
        .config(function ($routeProvider, $locationProvider, $httpProvider, localStorageServiceProvider) {
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


        })
        .value('appToken', SH.APP_TOKEN)
    ;

})(angular, _, jQuery, StubHub);

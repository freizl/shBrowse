;(function(angular, _, $) {
    'use strict';

    // COPY FROM ng-translate but do not use '_' in locale value.
    var getLocale = function () {
        var nav = window.navigator;
        return ((angular.isArray(nav.languages) ? nav.languages[0] : nav.language || nav.browserLanguage || nav.systemLanguage || nav.userLanguage) || '').toLowerCase();
    };

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
        .config(function ($routeProvider, $locationProvider, $httpProvider, localStorageServiceProvider, $translateProvider, C_APP_TOKEN) {
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

            $httpProvider.defaults.headers.common.Authorization = C_APP_TOKEN;

            $locationProvider.html5Mode(true);

            localStorageServiceProvider.setPrefix('stubhub');

            $translateProvider.useStaticFilesLoader({
                prefix: '/languages/',
                suffix: '.json'
            });
            $translateProvider.addInterpolation('$translateMessageFormatInterpolation');

        })
        .run(['$translate', 'localStorageService', 'C_LOCALE_KEY', function ($translate, localStorageService, LOCALE_KEY) {
            var locale = localStorageService.get(LOCALE_KEY) || getLocale() || 'en-us';
            $translate.use(locale);
        }])
    ;

})(angular, _, jQuery);

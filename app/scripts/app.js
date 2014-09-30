;(function(angular, _, $) {
    'use strict';

    var APP_TOKEN = 'Bearer wzHoy6uSWWV9qHnK9KF42NP09LQa';

    // FIXME: To do in server side
    function _loadAngularI18N () {
            // <!-- <script src="/bower_components/angular-i18n/angular-locale_zh-cn.js"></script> -->
        var search = document.location.search,
            xs = _.filter(search.split('&'), function (v) { return v.indexOf('locale') === 0; });
        if (xs.length >= 1) {
            $.getScript("/bower_components/angular-i18n/angular-locale_" + xs[0].substr(7) + ".js");
        }
    }

    _loadAngularI18N();

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
            'ngTouch'
        ])
        .value('appToken', APP_TOKEN) // FIXME: may a app provider??
        .config(function ($routeProvider, $locationProvider, $httpProvider) {
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

            $httpProvider.defaults.headers.common.Authorization = APP_TOKEN;

            $locationProvider.html5Mode(true);

        });

})(angular, _, jQuery);

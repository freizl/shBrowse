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
    'ngTouch'
  ])
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

      $httpProvider.defaults.headers.common.Authorization = 'Bearer wzHoy6uSWWV9qHnK9KF42NP09LQa';

      $locationProvider.html5Mode(true);

  });

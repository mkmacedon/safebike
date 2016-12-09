'use strict';

/**
 * @ngdoc overview
 * @name safebikeApp
 * @description
 * # safebikeApp
 *
 * Main module of the application.
 */
angular
  .module('safebikeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toastr',
    'LocalStorageModule',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm'
      })
      .when('/', {
        templateUrl: 'views/reserve.html',
        controller: 'ReserveCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/reserve'
      });
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
  });

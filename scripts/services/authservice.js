'use strict';

/**
 * @ngdoc service
 * @name safebikeApp.authService
 * @description
 * # authService
 * Factory in the safebikeApp.
 */
angular.module('safebikeApp')
.factory('authService', function ($http, $q, localStorageService, urls) {
  var serviceBase = urls.proxy;
  var authServiceFactory = {};

  var _authentication = {
      isAuth: false,
      userName : ""
  };

  var _saveRegistration = function (registration) {

      _logOut();

      return $http.post(serviceBase + urls.account.register, registration).then(function (response) {
          return response;
      });

  };

  var _login = function (loginData) {
      var data = "grant_type=password&username=" + loginData.username + "&password=" + loginData.password;
      var deferred = $q.defer();

      $http.post(serviceBase + urls.token, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .success(function (response) {
          localStorageService.set('authorizationData', { token: response.access_token, username: loginData.username });

          _authentication.isAuth = true;
          _authentication.username = loginData.username;

          deferred.resolve(response);
      })
      .error(function (err, status) {
          _logOut();
          deferred.reject(err);
      });

      return deferred.promise;
  };

  var _logOut = function () {

      localStorageService.remove('authorizationData');

      _authentication.isAuth = false;
      _authentication.userName = "";
  };

  var _fillAuthData = function () {

      var authData = localStorageService.get('authorizationData');
      if (authData)
      {
          _authentication.isAuth = true;
          _authentication.userName = authData.userName;
      }
  };

  authServiceFactory.saveRegistration = _saveRegistration;
  authServiceFactory.login = _login;
  authServiceFactory.logOut = _logOut;
  authServiceFactory.fillAuthData = _fillAuthData;
  authServiceFactory.authentication = _authentication;

  return authServiceFactory;
});

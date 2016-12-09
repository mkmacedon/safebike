'use strict';

/**
 * @ngdoc function
 * @name safebikeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the safebikeApp
 */
angular.module('safebikeApp')
.controller('LoginCtrl', function (toastr, authService, $location) {
    var vm = this;

    vm.credentials = {
    	username: "",
    	password: ""
    };

    vm.login = function() {
        authService.login(vm.credentials)
        .then(function(data) {
            $location.path("/");
        })
        .catch(function(data) {
            toastr.error("The provided credentials are invalid", "Error");
            vm.loginForm.$setPristine();
            vm.loginForm.$setUntouched();
            vm.credentials = {
                username: "",
                password: ""
            };
        });
    };
});

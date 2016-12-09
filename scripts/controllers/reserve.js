'use strict';

/**
 * @ngdoc function
 * @name safebikeApp.controller:ReserveCtrl
 * @description
 * # ReserveCtrl
 * Controller of the safebikeApp
 */
angular.module('safebikeApp')
.controller('ReserveCtrl', function (stationService) {
	var vm = this;


	stationService.getAll().then(function(result) {
		vm.stations = result;
	})
});

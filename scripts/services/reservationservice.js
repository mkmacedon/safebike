'use strict';

/**
 * @ngdoc service
 * @name safebikeApp.reservationService
 * @description
 * # reservationService
 * Service in the safebikeApp.
 */
angular.module('safebikeApp')
.service('reservationService', function ($http, urls) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = this;

    service.getAll = function() {
    	return $http({
				method: 'GET',
				url: urls.proxy + urls.reservation.all
			}).then(function(result) {
				return result.data;
			});
    };

    service.getActive = function() {
    	return $http({
				method: 'GET',
				url: urls.proxy + urls.reservation.active
			}).then(function(result) {
				return result.data;
			});
    };

    service.getCompleted = function() {
    	return $http({
				method: 'GET',
				url: urls.proxy + urls.reservation.completed
			}).then(function(result) {
				return result.data;
			});
    };

    service.insert = function(reservation) {
    	return $http({
				method: 'POST',
				url: urls.proxy + urls.reservation.add,
				data: reservation
			}).then(function(result) {
				return result.data;
			});
    };

    service.changeCard = function(change) {
    	return $http({
				method: 'POST',
				url: urls.proxy + urls.reservation.change_card,
				data: change
			}).then(function(result) {
				return result.data;
			});
	};
});

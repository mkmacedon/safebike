'use strict';

/**
 * @ngdoc service
 * @name safebikeApp.stationService
 * @description
 * # stationService
 * Service in the safebikeApp.
 */
angular.module('safebikeApp')
.service('stationService', function ($http, urls) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	var service = this;

    service.getAll = function() {
    	return $http({
				method: 'GET',
				url: urls.proxy + urls.station.all
			}).then(function(result) {
				return result.data;
			});
    };
});

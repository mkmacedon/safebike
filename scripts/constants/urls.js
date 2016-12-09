'use strict';

/**
 * @ngdoc service
 * @name safebikeApp.urls
 * @description
 * # urls
 * Constant in the safebikeApp.
 */
angular.module('safebikeApp')
.constant('urls', {
	proxy: "https://api.safebike.no",
	token: "/Token",
	account: {
		register: "/Account/Register",
		reset: "/Account/ResetPassword",
		change: "/Account/ChangePassword",
		update: "/Account/Update",
		get: "/Account/Get"
	},
	card: {
		get: "/Card/GetAll",
		add: "/Card/Add",
		delete: "/Card/Delete",
		update: "/Card/Update"
	},
	station: {
		all: "/Station/GetAll",
		available: "/Station/GetAvailableBoxes/"
	},
	reservation: {
		all: "/Reservation/GetAll",
		active: "/Reservation/GetActive",
		completed: "/Reservation/GetCompleted",
		add: "/Reservation/Add",
		change_card: "/Reservation/ChangeCard",
		end: "/Reservation/End/"
	}
});

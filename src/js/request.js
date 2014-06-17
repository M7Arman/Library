var app = angular.module("app", []);

app.controller("AppCtrl", function ($http) {
	$http.get("http://localhost/src/page/contact.html")
		.success(function (data) {
			console.log(data)
		})
	$http({method: 'GET', url: 'http://localhost/src/category'})
		.success(function (data) {
			console.log(data)
		})
})

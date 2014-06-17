var app = angular.module("app", []);

app.controller("AppCtrl", function ($http) {
	$http.get("http://localhost/src/page/contact.html")
		.success(function (data) {
			console.log(data)
		})
/* motavor 2 ropeic		
*https://egghead.io/lessons/angularjs-http
*	$http.post("http://localhost/library/contact.html")
*		.success(function (data) {
*			console.log(data)
*		})*/
})
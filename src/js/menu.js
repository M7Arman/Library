var app = angular.module("app", []);

app.controller("AppCtrl", function ($http) {
	$http.get("http://localhost/library/contact.html")
		.success(function (data) {
			console.log(data)
		})
/* motavor 2 ropeic		
*https://egghead.io/lessons/angularjs-http
*	$http.post("http://localhost/library/contact.html")
*		.success(function (data) {
*			console.log(data)
*		})
*})
*/
function menuCtrl($scope) {

 $scope.lastClick = "contact";
	$scope.menuList = {
		home: true,
		contact: false,
		aboutAs: false,
	};

	$scope.homeClick = function() {
		$scope.clearTrue();
		$scope.menuList.home = true;
	};

	$scope.contactClick = function() {
		$scope.clearTrue();
		$scope.menuList.contact = true;
	};

	$scope.aboutAsClick = function() {
		$scope.clearTrue();
		$scope.menuList.aboutAs = true;
	};

	$scope.clearTrue = function() {
		$scope.menuList.home = false;
		$scope.menuList.contact = false;
		$scope.menuList.aboutAs = false;
	};
}

//angular.module("myApp",[])
function menuCtrl($scope) {

 $scope.lastClick = "contact";
	$scope.menuList = {
		home: true,
		contact: false,
		aboutAs: false,
	};

	$scope.homeClick = function() {
		$scope.clearTrue();
		$scope.menuList.$scope.lastClick = false;
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
		angular.forEach( $scope.menuList, name)
	}

}

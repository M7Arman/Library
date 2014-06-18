function menuCtrl($scope) {
	$scope.lastClick = "contact";
	$scope.menuList = {
		home: true,
		contact: false,
		aboutAs: false,
	};
	$scope.paths = {
		home: 'page/news.html',
		contact: 'page/contact.html',
		aboutAs: 'page/aboutAs.html',
		addUser: 'page/addUser.html',
	}
	$scope.currentPath = $scope.paths.home;

	$scope.homeClick = function() {
		$scope.currentPath = $scope.paths.home;
		$scope.clearTrue();
		$scope.menuList.home = true;
	};

	$scope.contactClick = function() {
		$scope.currentPath = $scope.paths.contact;
		$scope.clearTrue();
		$scope.menuList.contact = true;
	};

	$scope.aboutAsClick = function() {
		$scope.currentPath = $scope.paths.aboutAs;
		$scope.clearTrue();
		$scope.menuList.aboutAs = true;
	};

	$scope.clearTrue = function() {
		$scope.menuList.home = false;
		$scope.menuList.contact = false;
		$scope.menuList.aboutAs = false;
	};

	$scope.addUserClick = function() {
		$scope.currentPath = $scope.paths.addUser;
	}

	$scope.getPath = function() {
		return $scope.currentPath;
	};
 
}

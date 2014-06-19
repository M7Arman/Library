function menuCtrl($scope, $http) {
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
		searchResponse: 'page/search.html'
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
		$scope.clearTrue();
		$scope.currentPath = $scope.paths.addUser;
	}

	$scope.getPath = function() {
		return $scope.currentPath;
	};
	
 	console.log($scope.searchText);
 	$scope.runSearch = function() {
 	$scope.clearTrue();
 	$scope.currentPath = $scope.paths.searchResponse;
	console.log($scope.searchText);
	$scope.url = 'http://localhost:8000/library/bookSearch?callback=JSON_CALLBACK&bookName='+$scope.searchText;
		$http.jsonp($scope.url)
			.success(function(data, status, headers, config) {
				console.log(data);
				$scope.data = data;
			})
			.error (function(data, status, headers, config) {
				console.log("error");
				$scope.data = data || "Request failed";
				$scope.status = status;
			})
	}

	//TODO: argument@ poxel dardznel mi bar, isk URL-ner@ JSON-i mej lcnel
	$scope.updateType = function(url) {
		console.log(url);
		$scope.url = url;
		// change search type (book, author, user)
	}
}

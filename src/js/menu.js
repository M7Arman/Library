function menuCtrl($scope, $http) {
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
		searchData: 'page/search.html',
		categoryData: 'page/category.html',
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

	$scope.categoriesResponse = [		// attempt
		'Art',
		'Business',
		'Philosophy',
		'Humor',
		'Science'
	]
	$scope.letters = [
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 
	'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'Y', 'Z']

	$scope.categories = $scope.categoriesResponse;  // attempt

	$scope.categoryRequest = function(index) {
		$scope.index = index;
		$scope.clearTrue();
		$scope.categoryUrl = 'http://localhost:8000/library/bookSearch?callback=JSON_CALLBACK&bookName=' + $scope.categoriesResponse[$scope.index];
		console.log($scope.categoryUrl);
		$http.jsonp($scope.categoryUrl)
			.success(function(data, status, headers, config) {	
				//
			})
			.error (function(data, status, headers, config) {
				console.log("error");
			})
	}

		// default path
	$scope.urlSearch = 'http://localhost:8000/library/bookSearch?callback=JSON_CALLBACK&bookName=';
 	$scope.searchRequest = function() {
 		$scope.clearTrue();
 		$scope.currentPath = $scope.paths.searchData;
		$scope.fullUrl = $scope.urlSearch + $scope.searchText;
		$http.jsonp($scope.fullUrl)
			.success(function(data, status, headers, config) {	
				console.log(data);
				$scope.data = data;
				$scope.status = status;
				console.log($scope.data, "Hey");
			})
			.error (function(data, status, headers, config) {
				console.log("error");
				$scope.data = data || "Request failed";
				$scope.status = status;
				console.log($scope.data);

			})
	}

	//TODO: argument@ poxel dardznel mi bar, isk URL-ner@ JSON-i mej lcnel
	$scope.updateType = function(url) {
		console.log(url);
		$scope.url = url;
		// change search type (book, author, user)
	}
}

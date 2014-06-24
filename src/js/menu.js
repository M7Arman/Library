function menuCtrl($scope, $http) {
	$scope.menuList = {
		home: true,
		contact: false,
		aboutAs: false,
	};

	$scope.url = 'http://localhost:8000/library';
	$scope.callback = 'callback=JSON_CALLBACK';
	

	$scope.filesPath = {
		home: 'page/news.html',
		contact: 'page/contact.html',
		aboutAs: 'page/aboutAs.html',
		addUser: 'page/addUser.html',
		searchData: 'page/search.html',
		categoryData: 'page/category.html',
	};

	$scope.currentPath = $scope.filesPath.home;

	$scope.homeClick = function() {
		$scope.currentPath = $scope.filesPath.home;
		$scope.clearTrue();
		$scope.menuList.home = true;
	};

	$scope.contactClick = function() {
		$scope.currentPath = $scope.filesPath.contact;
		$scope.clearTrue();
		$scope.menuList.contact = true;
	};

	$scope.aboutAsClick = function() {
		$scope.currentPath = $scope.filesPath.aboutAs;
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
		$scope.currentPath = $scope.filesPath.addUser;
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

///////////////////////////////////// REQUESTS /////////////////////////////////////

			// default search sort 
	$scope.searchSort = '/bookSearch?'; 
 	$scope.searchRequest = function() {
 		$scope.clearTrue();
 		$scope.currentPath = $scope.filesPath.searchData;
 		
 		$scope.fullPath = $scope.url + $scope.searchSort + $scope.callback + '&name=' + $scope.searchingText;
		$http.jsonp($scope.fullPath)
			.success(function(data, status, headers, config) {	
				console.log(data);
				$scope.data = data;
				console.log($scope.data[0].authorName)
				$scope.searchingText = "";
			})
			.error (function(data, status, headers, config) {
				console.log("error");
				$scope.data = data || "Request failed";
				console.log($scope.data);
				$scope.searchingText = "";
			})
	};

	$scope.categoryListRequest = function() {
		$scope.fullPath = $scope.url + '/category?' + $scope.callback;

		$http.jsonp($scope.fullPath)
			.success(function(data) {
		
				console.log(data);
			})
			.error (function(data) {
				///
				console.log("error categoryListRequest");
			})
	};


	$scope.categoryRequest = function(index) {
		$scope.clearTrue();

		$scope.index = index;
		$scope.fullPath = $scope.url + '/category?' + $scope.callback + '&Name=' + $scope.categoriesResponse[$scope.index];
		$http.jsonp($scope.fullPath)
			.success(function(data, status, headers, config) {	
				///
			})
			.error (function(data, status, headers, config) {
				///
				console.log("error");
			})
	};

////////////////////////////////////////////////////////////////////////////////////
}

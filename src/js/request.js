function searchCtrl ($scope, $http) {

	//$scope.method = 'GET';
	//$scope.type = 'book';
	$scope.url = 'http://localhost/src/book.html?callback=JSON_CALLBACK';

	$scope.runSearch = function() {
		$http.jsonp($scope.url)
			.success(function(data, status, headers, config) {
				console.log(data);
				console.log(config);
				$scope.status = status;
				$scope.data = data;
			})
			.error (function(data, status, headers, config) {
				console.log(status);
				console.log(config);

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

function searchCtrl ($scope, $http) {

	$scope.runSearch = function() {
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

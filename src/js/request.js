function searchCtrl ($scope, $http) {

	$scope.method = 'GET';
	//$scope.type = 'book';
	$scope.url = 'http://localhost/src/book.html';

	$scope.runSearch = function() {
		$http({method: $scope.method, url: $scope.url}).
			success(function(data, status) {
				$scope.status = status;
				$scope.data = data;
			}). 
			error (function(data, status) {
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

describe('menuCtrl', function () {
  
  beforeEach(module('libraryApp'));
console.log("aa");
	it('should create "letters" model with 26 letters!', function() {
		var scope = {},
        ctrl = $controller('menuCtrl', {$scope:scope});
console.log("aa");

		expect(scope.letters.length).toBe(26);
	});
});
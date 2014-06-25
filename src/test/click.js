describe('clicks in Library project!', function () {
	
	it('Contact click...', function() {
		expect(element(by.binding('currentPath')).getText()).toMatch('page/news.html');
	});
/*
	it('Home click...', function() {

	});*/
});
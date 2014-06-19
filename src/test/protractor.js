var status = element(by.binding('status'));
var data = element(by.binding('data'));
var runSearchBtn = element(by.id('runSearchBtn'));


it ('should make an xhr GET request', function () {
	runSearchBtn.click();
	expect(status.getText()).toMatch('200');
	expect(data.getText()).toMatch('Samvel');
});
var path    = require('path');
var postcss = require('postcss');
var expect  = require('chai').expect;
var fs      = require('fs');

var plugin = require('../');

function test(name, opts, done) {
	var fixtureDir = './test/fixtures/';
	var baseName   = name.split(':')[0];
	var testName   = name.split(':').join('.');
	var inputPath  = path.resolve(fixtureDir + baseName + '.css');
	var expectPath = path.resolve(fixtureDir + testName + '.expect.css');

	var inputCSS  = fs.readFileSync(inputPath, 'utf8');
	var expectCSS = fs.readFileSync(expectPath, 'utf8');

	postcss([plugin(opts)]).process(inputCSS, {
		from: inputPath
	}).then(function (result) {
		var actualCSS = result.css;

		expect(actualCSS).to.eql(expectCSS);
		expect(result.warnings()).to.be.empty;

		done();
	}).catch(function (error) {
		done(error);
	});
}

describe('postcss-short-position', function () {
	it('supports positions', function (done) {
		test('basic', {}, done);
	});

	it('supports different lengths', function (done) {
		test('lengths', {}, done);
	});

	it('supports vars', function (done) {
		test('vars', {}, done);
	});

	it('supports asterisks', function (done) {
		test('asterisks', {}, done);
	});

	it('supports prefixed position when a prefix is specified', function (done) {
		test('prefix:w-prefix', { prefix: 'x' }, done);
	});

	it('ignores normal position when a prefix is specified', function (done) {
		test('basic:w-prefix', { prefix: 'x' }, done);
	});

	it('ignores prefixed position when a prefix is not specified', function (done) {
		test('prefix', {}, done);
	});
});

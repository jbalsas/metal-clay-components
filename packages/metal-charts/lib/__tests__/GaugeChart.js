'use strict';

var _billboard = require('billboard.js');

var _GaugeChart = require('../GaugeChart');

var _GaugeChart2 = _interopRequireDefault(_GaugeChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

beforeAll(function () {
	jest.spyOn(_billboard.bb, 'generate').mockImplementation();
});

beforeEach(function () {
	_billboard.bb.generate.mockReset();
});

afterAll(function () {
	_billboard.bb.generate.mockReset();
	_billboard.bb.generate.mockRestore();
});

describe('GaugeChart', function () {
	it('should be pass correct type to billboard.js', function () {
		new _GaugeChart2.default({
			columns: []
		});

		var config = _billboard.bb.generate.mock.calls[0][0];

		expect(config.data.type).toBe('gauge');
	});
});
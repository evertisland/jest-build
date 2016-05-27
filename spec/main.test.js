(function() {
    'use strict';

    var main = require('../input/main');

    describe('Jasmine', function () {
        it('works', function () {
            expect(main.hello()).toBe('hello jasmine');
        });
    });
}());

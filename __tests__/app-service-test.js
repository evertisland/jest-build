jest.unmock('../input/app-service');
jest.unmock('../node_modules/angular/angular');
jest.unmock('../node_modules/angular-mocks/angular-mocks');

describe('sum', function () {
    it('returns what is input', function () {
        require('../node_modules/angular/angular');
        angular.module('app', [
            require('../node_modules/angular-mocks/angular-mocks')
        ]);
        var log = require('../input/app-service');
        expect(log('hello')).toBe('hello');
    });
});

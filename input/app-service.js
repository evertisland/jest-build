(function() {
    'use strict';
    angular
    .module('app')
    .factory('appService', appService);

    function appService(input) {
        return input;
    }
    module.exports = appService;
}());


(function () {
    'use strict';
    angular.module('app')
        .filter('startFrom', function () {
            return function (data, start) {
                if (data) {
                    start = +start;
                    return data.slice(start);
                }
                return [];
            }
        })
})();
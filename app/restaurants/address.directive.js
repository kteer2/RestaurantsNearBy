angular.module('app')
    .directive('myAddress', function() {
        return {
            template: 'Address: {{p.vicinity}}'
        };
    });
angular.module('app')
    .directive('myName', function() {
        return {
            template: 'Name: {{p.name}}'
        };
    });

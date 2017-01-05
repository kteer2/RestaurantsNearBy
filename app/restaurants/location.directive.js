angular.module('app')
    .directive('myLocation', function() {
        return {
            template:
                'My Location: Lat : {{p.geometry.location.lat}} Lng : {{p.geometry.location.lng}}'

        };
    });
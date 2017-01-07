
(function () {
    angular.module('app')
        .service('RestaurantService',RestaurantService);

    RestaurantService.$inject = ['$http'];
    function RestaurantService($http){
        this.findNearByRestaurants = function (location) {
           // console.log("loc in service"+location);
            var config = {
                method: 'GET',
              //  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyD6i1EKqpd2sA0Bd7JqwWrl2HsVu1O3k9g&types=restaurant&radius=8046.72',
                 url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDmabVwzljwuEXsdJ8obNPmLXhod4eAk7E&type=restaurant&keyword=cruise&radius=18046.72',
                 params:{location: location}
            };

            return $http(config)
                .then(function (resp) {
                   return resp.data.results;
                   }, function (err) {
                    console.log(err);
                    return err;
                });



        }
    }
})();
(function () {
    angular.module('app')
        .controller('ListController',ListController);
    ListController.$inject = ['RestaurantService','$geolocation','$scope'];
    function ListController(RestaurantService,$geolocation,$scope){
        var vm = this;
        vm.img1 = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=AIzaSyD6i1EKqpd2sA0Bd7JqwWrl2HsVu1O3k9g&photoreference=";
        //vm.img2 = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=AIzaSyD6i1EKqpd2sA0Bd7JqwWrl2HsVu1O3k9g&htmlattributions=";
        vm.pageSize = 4;
        vm.currentPage = 1;
        $geolocation.getCurrentPosition().then(function(position) {
            vm.lat = position.coords.latitude;
            vm.lon = position.coords.longitude;
            var coord = vm.lat +","+vm.lon;
            var myLatLng = {lat: vm.lat, lng: vm.lon};
           // console.log(vm.lat,vm.lon);

            // function initMap() {
            //     var x = vm.restaurants.geometry.location.lat;
            //     var y = vm.restaurants.geometry.location.lng;
            //     var uluru = { lat:x, lng:y };
            //     console.log("welcome controller");
            //     console.log(uluru);
            //     console.log(x);
            //     var map = new google.maps.Map(document.getElementById('map'), {
            //         zoom: 4,
            //         center: uluru
            // });
            //     console.log(zoom);
            //     var marker = new google.maps.Marker({
            //         position: uluru,
            //         map: map
            //     });
            // }


            // console.log(zoom);



            RestaurantService.findNearByRestaurants(coord)
                .then(function (resp) {
                    vm.restaurants = resp;
                    //console.log(resp);
                    for(var i=0;i<resp.length;i++) {
                        console.log(i);
                      var x =resp[i].geometry.location.lat;
                       var y =resp[i].geometry.location.lng;
                       //console.log(x,y);
                        var myLatLng = {lat: x, lng: y};
                        var map;

                        var mapOptions = {
                            zoom: 14,
                            center: new google.maps.LatLng(vm.lat,vm.lon),
                            scrollwheel: true,
                            draggable: true,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            maxZoom: 11,
                            minZoom: 9,
                            zoomControlOptions: {
                                position: google.maps.ControlPosition.LEFT_BOTTOM,
                                style: google.maps.ZoomControlStyle.DEFAULT
                            },
                            panControlOptions: {
                                position: google.maps.ControlPosition.LEFT_BOTTOM
                            }

                        };

                        vm.map = new google.maps.Map(document.getElementById('map'), mapOptions);
                        var marker = new google.maps.Marker({
                            position: myLatLng,
                            map : map,
                            draggable: true,
                            title: 'My Restaurant'
                        });

                       console.log(myLatLng);
                    }

                },function (err) {
                    console.log(err);
                });


        });
    }
})();
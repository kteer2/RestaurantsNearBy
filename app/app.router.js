
(function () {

    angular.module('app')
        .config(PlaceRouter);

    PlaceRouter.$inject = ['$stateProvider','$urlRouterProvider'];
    function PlaceRouter($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl: 'app/restaurants/restaurantview.html',
                controller:'ListController',
                controllerAs:'vm'

            })
            .state('maps',{
                url:'/maps',
                templateUrl:'app/restaurants/mapview.html',
                controller:'MapController',
                controllerAs:'vm'
            })
    }

})();
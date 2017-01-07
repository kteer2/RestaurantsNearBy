(function(){

    describe('restaurantdetailsservice', function(){
        beforeEach(module('app'));

        var restaurantservice, httpBackend;
        beforeEach(inject(function(_RestaurantService_,_$httpBackend_){
             restaurantservice = _RestaurantService_;
            httpBackend = _$httpBackend_;

        }));

        describe('loads service' ,function(){
            it('loads api call',function(){
                httpBackend.when('GET', 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDmabVwzljwuEXsdJ8obNPmLXhod4eAk7E&type=restaurant&keyword=cruise&radius=18046.72')
                    .respond({ trolled: 'true' });

            });
            $httpBackend.flush();
        });


    })

})();
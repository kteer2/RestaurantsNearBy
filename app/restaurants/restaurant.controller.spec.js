(function(){

    describe('restaurantcontroller', function() {
        var restctrl;
        beforeEach(module('app'));
        beforeEach(inject(function(_$controller_){
          restctrl = _$controller_('ListController');
        }));

        describe('controller initiation', function(){

            it('loads controller', function() {
                console.log(restctrl);
            });

            // it('sets the page size to 4', function() {
            //     // your test assertion goes here
            // });
        });


    });


})();
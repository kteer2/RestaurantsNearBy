(function(){

    describe('addressdirective', function(){
        beforeEach(module('app'));
        var $filter;
        beforeEach(inject(function(_$filter_){
            $filter = _$filter_;
               it('loads four restaurants per page', function() {
                var length = $filter('startFrom');
                expect(startFrom(start)).toEqual(start);
            });


        }));

    })

})();
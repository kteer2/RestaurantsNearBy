(function(){

    describe('namedirective', function(){
        beforeEach(module('app'));
        beforeEach(inject(function(_$compile_,_$rootScope_){
        var $scope = _$rootScope_.$new();
        $scope.val = {
                name: 'myrestaurant'
        };


        var elem = '<my-name test ="val"></my-name>';
        elem = _$compile_(elem)($scope);
        $scope.$digest();
            expect(elem.html()).toContain("myrestaurant");
        }));

        describe('directive initization ',function(){
        it('loads directive',function(){
            var isolatedScope = elem.isolateScope();
            });
        });


    })

})();
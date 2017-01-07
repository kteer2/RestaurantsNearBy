(function(){

    describe('addressdirective', function(){
        beforeEach(module('app'));
        beforeEach(inject(function(_$compile_,_$rootScope_){
            var $scope = _$rootScope_.$new();
            $scope.val = {
                Address: '32 The Promenade, Sydney'
            };


            var elem = '<my-address test ="val"></my-address>';
            elem = _$compile_(elem)($scope);
            $scope.$digest();
            expect(elem.html()).toContain("32 The Promenade, Sydney");
        }));

        describe('directive initization ',function(){
            it('loads directive',function(){
                var isolatedScope = elem.isolateScope();
            });
        });


    })

})();
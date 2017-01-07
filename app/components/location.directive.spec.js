(function(){

    describe('locationdirective', function(){
        beforeEach(module('app'));
        beforeEach(inject(function(_$compile_,_$rootScope_){
            var $scope = _$rootScope_.$new();
            $scope.val = {
                Location: '45.00, 78.325'
            };


            var elem = '<my-location test ="val"></my-location>';
            elem = _$compile_(elem)($scope);
            $scope.$digest();
            expect(elem.html()).toContain("45.00, 78.325");
        }));

        describe('directive initization ',function(){
            it('loads directive',function(){
                var isolatedScope = elem.isolateScope();
            });
        });


    })

})();
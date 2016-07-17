(function() {
    "use strict";

    var controller = function($scope, $rootScope, $route, data, decorator) {
        var chapters = _.map(_.range(1, 36), function(p) { return ("0" + p).slice(-2); });
        var readings = _.map(_.range(3, 20), function(p) { return 'r' + ("0" + p).slice(-2); });

        $scope.collection = _.map(_.union(chapters, readings), function(p) {
            return {
                id: p,
                label: p,
                group: 'poel',
                name: 'chapter'
            };
        });

        $scope.chapter = $rootScope.loadParameter('chapter', $route.current.pathParams.chapter, '1');

        $rootScope.setup($scope.collection);

        var get = $scope.chapter[0] == 'r' ? data.reader : data.vocab;
		$scope.type = $scope.chapter[0] == 'r' ? 'Reader' : 'Vocabulary';
		$scope.number = parseInt($scope.chapter.replace(/r/g, ''));
        get($scope.chapter)
            .then(function(data) {
                $scope.words = decorator.words(data);
//                $scope.chapters = decorator.poel(data);
                $scope.selection = _.find($scope.words, function(p) { return p.base == $scope.chapter; });
            });
    };

    poel.controller('poel.indexController', ['$scope', '$rootScope', '$route', 'poel.data', 'poel.decorator', controller]);
})();
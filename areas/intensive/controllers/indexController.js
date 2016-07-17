(function() {
    "use strict";

    var controller = function($scope, $rootScope, $route, data, decorator) {
        data
            .index()
            .then(function (result) {
                $scope.collection = _.map(result, function (p) {
                    var index = p.file.indexOf('.');
                    var id = p.file.substring(0, index);
                    return { id: id, label: p.name, group: 'intensive', name: 'category' };
				});

                $rootScope.setup($scope.collection);
                $scope.category = $rootScope.loadParameter('category', $route.current.pathParams.category, 'adverbs');

                $scope.title = $rootScope.loadName($scope.collection, $scope.category)

                data.load($scope.category)
                    .then(function (result) {
                        $scope.words = result;
                    });
			});
    };

    intensive.controller('intensive.indexController', ['$scope', '$rootScope', '$route', 'intensive.data', 'intensive.decorator', controller]);
})();
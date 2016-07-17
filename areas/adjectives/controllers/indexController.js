(function() {
    "use strict";

    var controller = function($scope, $rootScope, $route, data, decorator) {

        data
            .adjectives()
            .then(function(data) {
                $scope.words = decorator.adjectives(data);

                $scope.collection = _.map($scope.words, function(p) {
                    return {
                        id: p.base,
                        label: p.base,
                        group: 'adjectives',
                        name: 'word'
                    };
                });

                $scope.word = $rootScope.loadParameter('word', $route.current.pathParams.word, 'ūllus');

                $rootScope.setup($scope.collection);

                $scope.selection = _.find($scope.words, function(p) { return p.base == $scope.word; });
            });
    };

    adjectives.controller('adjectives.indexController', ['$scope', '$rootScope', '$route', 'adjectives.data', 'adjectives.decorator', controller]);
})();
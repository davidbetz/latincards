(function() {
    "use strict";

    var controller = function($scope, $rootScope, $route, data, decorator) {

        data
            .pronouns()
            .then(function(data) {
                $scope.words = decorator.pronouns(data);

                $scope.collection = _.map($scope.words, function(p) {
                    return {
                        id: p.base,
                        label: p.base,
                        group: 'pronouns',
                        name: 'word'
                    };
                });

                $scope.word = $rootScope.loadParameter('word', $route.current.pathParams.word, 'is');

                $rootScope.setup($scope.collection);

                $scope.selection = _.find($scope.words, function(p) { return p.base == $scope.word; });
            });
    };

    pronouns.controller('pronouns.indexController', ['$scope', '$rootScope', '$route', 'pronouns.data', 'pronouns.decorator', controller]);
})();
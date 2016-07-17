(function() {
    "use strict";

    var controller = function($scope, $rootScope, $route, data, decorator) {
        var categories = ['Adverbs', 'Adjectives', 'Verbs']

        $scope.collection = _.map(categories, function(p) {
            return {
                id: p,
                label: p,
                group: 'vocab',
                name: 'category'
            };
        });

        $scope.category = $rootScope.loadParameter('category', $route.current.pathParams.category, 'Adverbs');

        $rootScope.setup($scope.collection);

        data.words($scope.category)
            .then(function(data) {
                $scope.words = data;
//                $scope.chapters = decorator.vocab(data);
                $scope.selection = _.find($scope.words, function(p) { return p.base == $scope.chapter; });
            });
    };

    vocab.controller('vocab.indexController', ['$scope', '$rootScope', '$route', 'vocab.data', 'vocab.decorator', controller]);
})();
(function() {
    "use strict";

    var controller = function($scope, $rootScope, $route, data, decorator) {
        var words = _.map(['sum', 'possum'], function(p) { return { id: p, label: p, group: 'irregular', name: 'word' }; });

        $scope.collection = _.map(['sum', 'possum'], function(p) { return { id: p, label: p, group: 'irregular', name: 'word' }; });

        $rootScope.setup($scope.collection);

        $scope.word = $rootScope.loadParameter('word', $route.current.pathParams.word, 'sum');

        data
            .load($scope.word)
            .then(function(data) {
                $scope.indicative = decorator.pivot(_.filter(data, function(p) { return p.mood.toLowerCase() == 'indicative' }));
                $scope.subjunctive = decorator.pivot(_.filter(data, function(p) { return p.mood.toLowerCase() == 'subjunctive' }));
                $scope.imperative = decorator.pivot(_.filter(data, function(p) { return p.mood.toLowerCase() == 'imperative' }));
                $scope.infinitive = _.find(data, function(p) { return p.mood.toLowerCase() == 'infinitive' }).forms;
                $scope.participle = _.find(data, function(p) { return p.mood.toLowerCase() == 'participle' }).forms;
            });
    };

    irregular.controller('irregular.indexController', ['$scope', '$rootScope', '$route', 'irregular.data', 'irregular.decorator', controller]);
})();
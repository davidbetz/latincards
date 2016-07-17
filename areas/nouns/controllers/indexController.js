(function() {
    "use strict";

    var controller = function($scope, $rootScope, $route, data, decorator) {
        data
			.nouns()
			.then(function(data) {
				$scope.collection = _.map(data, function(p) {
					return { id: p.name, label: p.name + ' (' + p.ending + ')', group: 'nouns', name: 'declension' };
				});

				$rootScope.setup($scope.collection);

				$scope.declension = $rootScope.loadParameter('declension', $route.current.pathParams.declension, '1st');

				$scope.selection = _.find(decorator.nouns(data), function(p) { return (p.name + ' (' + p.ending + ')') == $rootScope.loadName($scope.collection, $scope.declension); });
			});
	};

    nouns.controller('nouns.indexController', ['$scope', '$rootScope', '$route', 'nouns.data', 'nouns.decorator', controller]);
})();
(function() {
    "use strict";

    var directive = function($location) {
        return {
            templateUrl: 'areas/adjectives/views/chart.htm',
            replace: true,
            restrict: 'E',
            scope: { data: '=' },
            link: function(scope, element, attrs) { }
        };
    };

    adjectives.directive('adjectives.chart', directive);
})();

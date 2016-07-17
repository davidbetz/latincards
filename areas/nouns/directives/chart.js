(function() {
    "use strict";

    var directive = function($location) {
        return {
            templateUrl: 'areas/nouns/views/chart.htm',
            replace: true,
            restrict: 'E',
            scope: { data: '=' },
            link: function(scope, element, attrs) { }
        };
    };

    nouns.directive('nouns.chart', directive);
})();

(function() {
    "use strict";

    var directive = function($location) {
        return {
            templateUrl: 'areas/verbs/views/chart.htm',
            replace: true,
            restrict: 'E',
            scope: { data: '=' },
            link: function(scope, element, attrs) { }
        };
    };

    verbs.directive('verbs.chart', directive);
})();

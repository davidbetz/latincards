(function() {
    "use strict";

    var directive = function($location) {
        return {
            templateUrl: 'areas/pronouns/views/chart.htm',
            replace: true,
            restrict: 'E',
            scope: { data: '=' },
            link: function(scope, element, attrs) { }
        };
    };

    pronouns.directive('pronouns.chart', directive);
})();

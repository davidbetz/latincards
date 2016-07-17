(function() {
    "use strict";

    var directive = function($location) {
        return {
            templateUrl: 'areas/irregular/views/viewer.htm',
            replace: true,
            restrict: 'E',
            scope: { forms: '=', examples: '=' },
            link: function(scope, element, attrs) { }
        };
    };

    irregular.directive('irregular.viewer', directive);
})();

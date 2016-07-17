(function() {
    "use strict";

    var directive = function($location) {
        return {
            templateUrl: 'areas/verbs/views/viewer.htm',
            replace: true,
            restrict: 'E',
            scope: { forms: '=', examples: '=' },
            link: function(scope, element, attrs) { }
        };
    };

    verbs.directive('verbs.viewer', directive);
})();

(function() {
    "use strict";

    var directive = function($location) {
        return {
            templateUrl: 'areas/verbs/views/forms.htm',
            replace: true,
            restrict: 'E',
            scope: { data: '=', first: '=' },
            link: function(scope, element, attrs) {
                scope.equals = function(a, b, c) {
                    return (a == b) && (b == c);
                };
            }
        }
    };

    verbs.directive('verbs.forms', directive);
})();
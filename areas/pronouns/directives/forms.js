(function() {
    "use strict";

    var directive = function($location) {
        return {
            templateUrl: 'areas/pronouns/views/forms.htm',
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

    pronouns.directive('pronouns.forms', directive);
})();
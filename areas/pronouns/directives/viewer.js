(function() {
    "use strict";

    var directive = function($location) {
        return {
            templateUrl: 'areas/pronouns/views/viewer.htm',
            replace: true,
            restrict: 'E',
            scope: { data: '=' },
            link: function(scope, element, attrs) {
                scope.$on('pronoun.changed', function (event, form) {
                    scope.data = form;
                });
            }
        };
    };

    pronouns.directive('pronouns.viewer', directive);
})();

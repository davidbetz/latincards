(function() {
    "use strict";

    var directive = function() {
        return {
            templateUrl: 'areas/intensive/views/viewer.htm',
            replace: true,
            restrict: 'E',
            scope: { type: '=', number: '=', words: '='  },
            link: function(scope, element, attrs) {
            }
        };
    };

    intensive.directive('intensive.viewer', directive);
})();
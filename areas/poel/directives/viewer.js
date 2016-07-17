(function() {
    "use strict";

    var directive = function() {
        return {
            templateUrl: 'areas/poel/views/viewer.htm',
            replace: true,
            restrict: 'E',
            scope: { type: '=', number: '=', words: '='  },
            link: function(scope, element, attrs) {
            }
        };
    };

    poel.directive('poel.viewer', directive);
})();
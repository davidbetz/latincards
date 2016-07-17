(function() {
    "use strict";

    var directive = function() {
        return {
            templateUrl: 'areas/vocab/views/viewer.htm',
            replace: true,
            restrict: 'E',
            scope: { type: '=', number: '=', words: '='  },
            link: function(scope, element, attrs) {
            }
        };
    };

    vocab.directive('vocab.viewer', directive);
})();
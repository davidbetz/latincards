(function () {
    "use strict";

    var directive = function ($location) {
        return {
            templateUrl: 'views/selection.htm',
            replace: true,
            restrict: 'E',
            scope: { selections: '=' },
            link: function (scope, element, attrs) {
                scope.jump = function (group, id, name) {
                    scope.$emit('navigate', { group: group, id: id, name: name });
                }
                /*
                scope.jump = function(form) {
                    scope.$broadcast('form.changed', form);
                }
                */
            }
        };
    };

    app.directive('selection', ['$location', directive]);
})();
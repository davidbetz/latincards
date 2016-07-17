adjectives.factory('adjectives.data', ['serviceBase', function(serviceBase) {
    "use strict";
    
    return {
        adjectives: function() {
            return serviceBase.json('adjectives', 'adjectives');
        }
    };
}]);
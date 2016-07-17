irregular.factory('irregular.data', ['serviceBase', function(serviceBase) {
    "use strict";
    
    return {
        load: function(word) {
            return serviceBase.json('irregular', word);
        }
    };
}]);
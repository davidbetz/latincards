intensive.factory('intensive.data', ['serviceBase', function(serviceBase) {
    "use strict";
    
    return {
        index: function() {
            return serviceBase.json('intensive', 'index');
        },
        load: function(file) {
            return serviceBase.json('intensive', file.toLowerCase());
        }
    };
}]);
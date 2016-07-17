vocab.factory('vocab.data', ['serviceBase', function(serviceBase) {
    "use strict";
    
    return {
        words: function(category) {
            return serviceBase.json('vocab', category.toLowerCase());
        }
    };
}]);
nouns.factory('nouns.data', ['serviceBase', function(serviceBase) {
    "use strict";
    
    return {
        pronouns: function() {
            return serviceBase.json('nouns', 'pronouns');
        },
        nouns: function() {
            return serviceBase.json('nouns', 'nouns');
        },
        indicative: function() {
            return serviceBase.json('nouns', 'indicative');
        }
    };
}]);
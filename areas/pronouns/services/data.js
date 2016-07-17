pronouns.factory('pronouns.data', ['serviceBase', function(serviceBase) {
    "use strict";
    
    return {
        pronouns: function() {
            return serviceBase.json('pronouns', 'pronouns');
        },
        nouns: function() {
            return serviceBase.json('pronouns', 'nouns');
        },
        indicative: function() {
            return serviceBase.json('pronouns', 'indicative');
        }
    };
}]);
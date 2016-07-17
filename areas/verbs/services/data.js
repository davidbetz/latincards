verbs.factory('verbs.data', ['serviceBase', function(serviceBase) {
    "use strict";
    
    return {
        indicative: function(number) {
            return serviceBase.xml('verbs', 'indicative');
        },
        subjunctive: function(number) {
            return serviceBase.xml('verbs', 'subjunctive');
        },
        infinitive: function(number) {
            return serviceBase.xml('verbs', 'infinitive');
        },
        imperative: function(number) {
            return serviceBase.xml('verbs', 'imperative');
        },
        participle: function(number) {
            return serviceBase.xml('verbs', 'participle');
        }
    };
}]);
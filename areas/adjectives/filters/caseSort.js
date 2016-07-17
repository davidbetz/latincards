(function() {
    "use strict";

    var filter = function() {
        return function(itemData) {
            var result = [];
            if(itemData.n) {
                result.push(itemData.n);
            }
            if(itemData.g) {
                result.push(itemData.g);
            }
            if(itemData.d) {
                result.push(itemData.d);
            }
            if(itemData.c) {
                result.push(itemData.c);
            }
            if(itemData.a) {
                result.push(itemData.a);
            }
            if(itemData.v) {
                result.push(itemData.v);
            }
            return result;
        };
    };

    adjectives.filter('caseSort', filter);
})();
poel.factory('poel.decorator', ['serviceBase', function(serviceBase) {
    "use strict";
    
    return {
        words: function(data) {
            var lines = _.chain(data.match(/[^\r\n]+/g))
                .filter(function(p) {
                    return p[0] != '#';
                })
                .map(function(p) {
                    return p.split(/:/);
                })
                .filter(function(p) {
                    return p.length > 1;
                })
                .map(function(p) {
                    return {
                        word: p[0].trim(),
                        gloss: p[1].trim()
                    };
                })
                .value();
            return lines;
        }
    };
}]);
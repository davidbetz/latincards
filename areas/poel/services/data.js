poel.factory('poel.data', ['serviceBase', function(serviceBase) {
    "use strict";
    
    return {
        vocab: function(number) {
            return serviceBase.txt('poel', 'vocab/poel_' + ("0" + number).slice(-2));
        },
        reader: function(number) {
            return serviceBase.txt('poel', 'readings/poel_r' + ("0" + number).slice(-2));
        }
    };
}]);
(function() {
    "use strict";

    var factory = function($cacheFactory) {
        return $cacheFactory('http');
    };

    app.factory('serviceCache', ['$cacheFactory', factory]);
})();
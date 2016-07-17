(function() {
    "use strict";

    var factory = function($http, $q, $timeout, serviceCache) {
        "use strict";
        
        var call = function (group, name, ext) {
            var deferred = $q.defer();
            var url = 'data/' + group + '/' + name + '.' + ext;
            $http
                .get(url, { cache: serviceCache })
                .then(function(response) {
                    deferred.resolve(response.data);
                },
                function(response) {
                    deferred.reject(response);
                });
            
            return deferred.promise;
        };

        return {
            json: function(group, name) {
                return call(group, name, 'json');
            },
            txt: function(group, name) {
                return call(group, name, 'txt');
            },
            xml: function(group, name) {
                return call(group, name, 'xml');
            }
        };
    };

    app.factory('serviceBase', ['$http', '$q', '$timeout', 'serviceCache', factory]);
})();
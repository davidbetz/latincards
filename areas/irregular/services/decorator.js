irregular.factory('irregular.decorator', ['serviceBase', function(serviceBase) {
    "use strict";

    return {
        pivot: function(data) {
            if(!data || data.length == 0) {
                return null;
            }
            var pivoted = [];
            var add = function(name) {
                pivoted.push(_.union([{ data: { form: name }}], _.map(data, function(p) { return { label: p.tense, data: p[name] }; })));
            };
            add('s1');
            add('s2');
            add('s3');
            add('p1');
            add('p2');
            add('p3');
            return pivoted;
        },
        clean: function(data) {
            if(data && data.notes) {
                data.notes = data.notes.join('\n');
            }
            return data;
        }
    };
}]);
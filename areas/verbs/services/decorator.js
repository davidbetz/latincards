verbs.factory('verbs.decorator', ['serviceBase', function (serviceBase) {
    "use strict";

    return {
        convert: function (data) {
            var removeLamePrefixLeftBehindFromX2JS = function(item) {
                // X2JS is rather lame in that it requires a prefix
                // {'attributePrefix': ''} does not remove it
                for(var name in item) {
                    var fixedName = name.substring(1);
                    item[fixedName] = item[name];
                    delete item[name];
                }
                return item;
            };
            var transformed = _.map(new X2JS().xml_str2json(data).verbs.forms.form, removeLamePrefixLeftBehindFromX2JS);
            return transformed;
        },
        structure: function (context) {
            var first = _.filter(context, function (p) { return p.person == '1st' });
            var second = _.filter(context, function (p) { return p.person == '2nd' });
            var third = _.filter(context, function (p) { return p.person == '3rd' });


            var activeFilter = function (p) { return p.voice == 'active'; };
            var passiveFilter = function (p) { return p.voice == 'passive'; };
            var sFilter = function (p) { return p.number == 'singular'; };
            var pFilter = function (p) { return p.number == 'plural'; };

            var endingMap = function (p) { return p.ending; };
            var exampleMap = function (p) { return p.example; };
            var connectorMap = function (p) { return p.connector; };

            var read = function (data, ap, sp, map) { return _.chain(data).filter(ap).filter(sp).map(map).value()[0]; }

            var apReader = function (label, filter, map) {
                return {
                    label: label,
                    s1: {
                        ending: read(first, filter, sFilter, map) //, connector: read(first, filter, sFilter, connectorMap)
                    },
                    s2: {
                        ending: read(second, filter, sFilter, map) //, connector: read(second, filter, sFilter, connectorMap)
                    },
                    s3: {
                        ending: read(third, filter, sFilter, map) //, connector: read(third, filter, sFilter, connectorMap)
                    },
                    p1: {
                        ending: read(first, filter, pFilter, map) //, connector: read(first, filter, pFilter, connectorMap)
                    },
                    p2: {
                        ending: read(second, filter, pFilter, map) //, connector: read(second, filter, pFilter, connectorMap)
                    },
                    p3: {
                        ending: read(third, filter, pFilter, map) //, connector: read(third, filter, pFilter, connectorMap)
                    }
                };
            }
            return {
                forms: [apReader('Active', activeFilter, endingMap), apReader('Passive', passiveFilter, endingMap)],
                examples: [apReader('Active', activeFilter, exampleMap), apReader('Passive', passiveFilter, exampleMap)]
            };
        }
    };
}]);
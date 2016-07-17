adjectives.factory('adjectives.decorator', [function() {
    "use strict";
    
    return {
        adjectives: function(data) {
            var iteration = ['n', 'g', 'd', 'c', 'a'];
            angular.forEach(data, function(item) {
                var declined = item.declined;
                angular.forEach(declined, function(data) {
                    angular.forEach(data.declined, function(declension) {
                        if(
                            declension.length > 2 &&
                            (
                                (declension[0] == declension[1]) &&
                                (declension[1] == declension[2])
                            )
                        ) {
                            declension.pop();
                            declension.pop();
                        }
                    });
                });
            });
            return data;
        },
        nouns: function(data) {
            var endings = _.find(data, function(p) { return p.base == 'Endings' });
            if(!endings) {
                var ns = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.declined, function(o){ return o.label == 'Singular'; }).declined.n[0] }).value();
                var gs = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.declined, function(o){ return o.label == 'Singular'; }).declined.g[0] }).value();
                var ds = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.declined, function(o){ return o.label == 'Singular'; }).declined.d[0] }).value();
                var cs = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.declined, function(o){ return o.label == 'Singular'; }).declined.c[0] }).value();
                var as = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.declined, function(o){ return o.label == 'Singular'; }).declined.a[0] }).value();

                var np = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.declined, function(o){ return o.label == 'Plural'; }).declined.n[0] }).value();
                var gp = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.declined, function(o){ return o.label == 'Plural'; }).declined.g[0] }).value();
                var dp = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.declined, function(o){ return o.label == 'Plural'; }).declined.d[0] }).value();
                var cp = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.declined, function(o){ return o.label == 'Plural'; }).declined.c[0] }).value();
                var ap = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.declined, function(o){ return o.label == 'Plural'; }).declined.a[0] }).value();

                var ens = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.example, function(o){ return o.label == 'Singular'; }).declined.n[0] }).value();
                var egs = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.example, function(o){ return o.label == 'Singular'; }).declined.g[0] }).value();
                var eds = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.example, function(o){ return o.label == 'Singular'; }).declined.d[0] }).value();
                var ecs = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.example, function(o){ return o.label == 'Singular'; }).declined.c[0] }).value();
                var eas = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.example, function(o){ return o.label == 'Singular'; }).declined.a[0] }).value();

                var enp = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.example, function(o){ return o.label == 'Plural'; }).declined.n[0] }).value();
                var egp = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.example, function(o){ return o.label == 'Plural'; }).declined.g[0] }).value();
                var edp = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.example, function(o){ return o.label == 'Plural'; }).declined.d[0] }).value();
                var ecp = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.example, function(o){ return o.label == 'Plural'; }).declined.c[0] }).value();
                var eap = _.chain(data).filter(function(p) { return !p.neuter; }).map(function(p) { return _.find(p.example, function(o){ return o.label == 'Plural'; }).declined.a[0] }).value();

                data.push({
                    base: "Endings",
                    declined: [
                        {
                            label: 'Singular',
                            declined: {
                                n: ns,
                                g: gs,
                                d: ds,
                                c: cs,
                                a: as
                            }
                        },
                        {
                            label: 'Plural',
                            declined: {
                            n: np,
                                g: gp,
                                d: dp,
                                c: cp,
                                a: ap
                            }
                        }
                    ],
                    example: [
                        {
                            label: 'Singular',
                            declined: {
                                n: ens,
                                g: egs,
                                d: eds,
                                c: ecs,
                                a: eas
                            }
                        },
                        {
                            label: 'Plural',
                            declined: {
                            n: np,
                                g: egp,
                                d: edp,
                                c: ecp,
                                a: eap
                            }
                        }
                    ]
                });
            }/*
            _.chain(data)
              .filter(function(p) { return p.neuter; })
              .each(function(p) {
                  _.each(p.declined, function(o) {
                    _.each(o.declined, function(q) {
                      _.each(q, function(r) {
                        console.log(r);
                      });
                    });
                  });
              })
              .value();
              */
            return data;
        }
    };
}]);
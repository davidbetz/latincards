(function() {
    "use strict";

    var controller = function($scope, $rootScope, $route, data, decorator) {
        $scope.collection = [
            { id: 'd', label: 'Indicative', group: 'verbs', name: 'mood' },
            { id: 's', label: 'Subjunctive', group: 'verbs', name: 'mood' },
            { id: 'n', label: 'Infinitives', group: 'verbs', name: 'mood' },
            { id: 'm', label: 'Imperatives', group: 'verbs', name: 'mood' },
            { id: 't', label: 'Participles', group: 'verbs', name: 'mood' },

            { id: 'p', label: 'Present', group: 'verbs', name: 'tense' },
            { id: 'i', label: 'Imperfect', group: 'verbs', name: 'tense' },
            { id: 'f', label: 'Future', group: 'verbs', name: 'tense' },
            { id: 'k', label: 'Perfect', group: 'verbs', name: 'tense' },
            { id: 'fp', label: 'Future Perfect', group: 'verbs', name: 'tense' },

            { id: '1', label: '1st', group: 'verbs', name: 'conjugation' },
            { id: '2', label: '2nd', group: 'verbs', name: 'conjugation' },
            { id: '3', label: '3rd', group: 'verbs', name: 'conjugation' },
            //{ id: '3io', label: '3rd io', group: 'verbs', name: 'conjugation' },
            { id: '4', label: '4th', group: 'verbs', name: 'conjugation' }
        ];

        var params = $route.current.pathParams;
        $scope.mood = $rootScope.loadParameter('mood', params.mood, 'd');
        $scope.tense = $rootScope.loadParameter('tense', params.tense, 'p');
        $scope.conjugation = $rootScope.loadParameter('conjugation', params.conjugation, '1');

        $rootScope.setup($scope.collection);

        $scope.moodName = $rootScope.loadName($scope.collection, $scope.mood);
        $scope.tenseName = $rootScope.loadName($scope.collection, $scope.tense);
        $scope.conjugationName = $rootScope.loadName($scope.collection, $scope.conjugation);

        var get;
        var mapping = {
            's': data.subjunctive,
            'd': data.indicative,
            'n': data.infinitive,
            'm': data.imperative,
            't': data.participle
        };
        get = mapping[$scope.mood];
        if(!get){
            return;
        }
        get()
            .then(function(xml) {
                var data = decorator.convert(xml);

                var context = _.filter(data, function(p) { return p.mood == $scope.moodName.toLowerCase() && p.tense == $scope.tenseName.toLowerCase() && p.conjugation == $scope.conjugationName.toLowerCase()});

                var structured = decorator.structure(context);
                $scope.forms = structured.forms;
                $scope.examples = structured.examples;
            }, function() {
                $scope.forms = [{'label': 'data not yet added'}];
            });
    };

    verbs.controller('verbs.indexController', ['$scope', '$rootScope', '$route', 'verbs.data', 'verbs.decorator', controller]);
})();




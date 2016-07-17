(function () {
    "use strict";

    var controller = function ($scope, $rootScope, $location, $route) {
        var categories = [
            { id: 'pronouns', label: 'Pronouns', group: 'index', name: 'type' },
            { id: 'adjectives', label: 'Adjectives', group: 'index', name: 'type' },
            { id: 'nouns', label: 'Nouns', group: 'index', name: 'type' },
            { id: 'verbs', label: 'Verbs', group: 'index', name: 'type' },
            { id: 'irregular', label: 'Irregular', group: 'index', name: 'type' },
            { id: 'poel', label: 'Ecclesiastical Latin', group: 'index', name: 'type' },
            { id: 'vocab', label: 'General Vocab', group: 'index', name: 'type' },
            { id: 'intensive', label: 'Intensive Latin', group: 'index', name: 'type' }
        ];

        $scope.$route = $route;

        var value = $location.path().replace('/', '');

        $scope.$on('$routeChangeSuccess', function (ev, data) {
            if (data.$$route && data.$$route.controller) {
                _.each(_.reject(categories, function (p) { return p.id == data.$$route.name; }), function (p) {
                    p.selected = null;
                });
                (_.find(categories, function (p) { return p.id == data.$$route.name; }) || {}).selected = true;
            }
        });

        var setup = function (selections) {
            var group = selections[0].group;
            if (group != 'index') {
                var routeData = _.find($scope.$route.routes, function (p) { return p.name == group; });
                var path = routeData.originalPath.replace(/:/g, '').replace(/\?/g, '');
                var partArray = path.split('/');
                var params = _.last(path.split('/'), partArray.length - 2);
                for (var n = 0; n < params.length; n++) {
                    var item = _.find(selections, function (p) { return p.name == params[n] && p.id == $scope.$route.current.pathParams[params[n]] });
                    if (item) {
                        item.selected = true;
                    }
                }
            }

            $scope.selections = _.union(categories, selections);
        };

        setup(categories);

        $rootScope.setup = setup;
        $rootScope.jump = function () {
            var area = arguments[0];
            var args = [];
            _.each(arguments, function (p) { args.push(p); });
            args.shift();
            var routeData = _.find($scope.$route.routes, function (p) { return p.name == area; });
            var path = routeData.originalPath.replace(/:/g, '').replace(/\?/g, '');
            var partArray = path.split('/');
            var params = _.last(path.split('/'), partArray.length - 2);
            for (var n = 0; n < params.length; n++) {
                path = path.replace(params[n], args[n]);
            }
            $location.path(path);
        };
        $rootScope.loadName = function (collection, id) {
            return _.find(collection, function (p) { return p.id == id; }).label;
        };
        $rootScope.loadParameter = function (name, parameter, initial) {
            var value = (parameter || initial).replace(/_/g, initial);
            (_.find($scope.collection, function (p) { return p.id == value; }) || {}).selected = true;
            return value;
        };

        $scope.state = [];
        console.log('state cleared');

        $scope.$on('navigate', function (evt, args) {
            if (args.group == 'index') {
                console.log('jump to ' + args.id);
                $location.path(args.id);
            }
            else {
                var existing = _.find($scope.state, function (p) { return p.group == args.group && p.id == args.id; });
                if (existing) {
                    $scope.state = _.reject($scope.state, function (p) { return p.group == args.group && p.id == args.id; })
                    //                    console.log('removed [' + JSON.stringify(args) + ']|' + JSON.stringify($scope.state));
                }
                else {
                    existing = _.find($scope.state, function (p) { return p.group == args.group && p.name == args.name; });
                    if (existing) {
                        $scope.state = _.reject($scope.state, function (p) { return p.group == args.group && p.name == args.name; })
                        //                        console.log('removed [' + JSON.stringify(args) + ']|' + JSON.stringify($scope.state));
                    }
                    //                    else {
                    //                        console.log('added [' + JSON.stringify(args) + ']|' + JSON.stringify($scope.state));
                    //                    }
                    $scope.state = _.union($scope.state, [args]);
                }
                if ($scope.state.length > 0) {
                    var routeData = _.find($scope.$route.routes, function (p) { return p.name == args.group; });
                    var path = routeData.originalPath.replace(/:/g, '').replace(/\?/g, '');
                    _.each($scope.state, function (p) {
                        path = path.replace(p.name, p.id);
                    });
                    var diff = _.difference(_.map(routeData.keys, function (p) { return p.name; }), _.map($scope.state, function (p) { return p.name; }));
                    _.each(diff, function (p) {
                        path = path.replace(p, '_');
                    });
                    //                    console.log('PATH IS ' + path);
                    $location.path(path);
                }
                else {
                    $location.path(args.group);
                }
            }
        });
    };

    app.controller('indexController', ['$scope', '$rootScope', '$location', '$route', controller]);
})();
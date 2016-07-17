var app = angular
    .module('app', ['ngRoute', 'pronouns', 'adjectives', 'nouns', 'poel', 'intensive', 'verbs', 'irregular', 'vocab'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//        $locationProvider.html5Mode(true).hashPrefix('!');
        var add = function(area, params) {
			$routeProvider
				.when('/' + area + '/' + params, {
					name: area,
					templateUrl: 'areas/' + area + '/home.htm',
					controller: area + '.indexController'
				});
		};

        add('pronouns', ':word?');
        add('adjectives', ':word?');
		add('nouns', ':declension?');
		add('poel', ':chapter?');
		add('verbs', ':mood?/:conjugation?/:tense?');
		add('irregular', ':word?');
		add('vocab', ':category?');
		add('intensive', ':category?');

		$routeProvider
			.otherwise({
			    templateUrl: 'views/home.htm'
			});
	}]);
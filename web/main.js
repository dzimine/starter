'use strict';

/* App Module */
angular.module('main', []).
      config(['$routeProvider', function($routeProvider) {
   $routeProvider
         .when('/changeme',
            {templateUrl: 'apps/changeme.html', controller: 'ChangeMeCtrl'})
         .otherwise({redirectTo: '/changeme'});
}]);

var NavCtrl = ['$scope', '$location', function ($s, $loc) {
   $s.isActiveLocation = function (route) {
    return route === $loc.path();
   };
}];
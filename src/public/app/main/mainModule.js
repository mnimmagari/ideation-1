'use strict';

// Declare app level module which depends on views, and components
angular.module('ideation.main', [
	'ngRoute', 'ui.bootstrap', 'ui.router', 'ngCookies'
  	, 'ideation.auth'
  	, 'ideation.dashboard'
  	, 'ideation.campaign'

  //'ideation.home',
  //'ideation.secure',
  //'ideation.version'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider

	  .when('/about', {
	    templateUrl: '/app/main/about.html'
	  })

	  .when('/contact',{
	  	templateUrl: '/app/main/contact.html'
	  })

	  .when('/faqs',{
	  	templateUrl: '/app/main/faqs.html'
	  })

/*	  .when('/home',{
	  	templateUrl: '/app/main/home.html'
	  })*/

  	  .when('/',{
	  	templateUrl: '/app/main/home.html'
	  })

/*	  .otherwise({
	  	redirectTo: '/'
	  });
*/	  
}]);


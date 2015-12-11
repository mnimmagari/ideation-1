'use strict';

// Declare app level module which depends on views, and components
angular.module('ideation.main', [
	'ngRoute', 'ui.bootstrap', 'ui.router', 'ngCookies', 'ngTagsInput', 'ngMessages',
	'ngAnimate', 'ngTouch', 'ui.grid', 'angular-growl'
	, 'textAngular'
  	, 'ideation.auth'
  	, 'ideation.dashboard'
  	, 'ideation.campaign'
  	, 'ideation.admin'
  	//, 'ideation.idea'

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
}])

.config(['growlProvider', function(growlProvider) {
	growlProvider.globalReversedOrder(true);
	growlProvider.globalTimeToLive({success: 1000, error: 2000, warning: 3000, info: 4000});
	growlProvider.globalDisableCountDown(true);
	growlProvider.globalPosition('top-center');
}]);;


// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

      .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
	
	.state('app.news', {
      url: '/news',
      views: {
        'menuContent': {
          templateUrl: 'templates/news.html'
        }
      }
    })
	
	.state('app.fixtureandresults', {
      url: '/fixtureandresults',
      views: {
        'menuContent': {
          templateUrl: 'templates/fixtureandresults.html'
        }
      }
    })
	
	.state('app.teammatephotos', {
      url: '/teammatephotos',
      views: {
        'menuContent': {
          templateUrl: 'templates/teammatephotos.html'
        }
      }
    })
	.state('app.rugby101', {
      url: '/rugby101',
      views: {
        'menuContent': {
          templateUrl: 'templates/rugby101.html'
        }
      }
    })
	.state('app.rugbyclubs', {
      url: '/rugbyclubs',
      views: {
        'menuContent': {
          templateUrl: 'templates/rugbyclubs.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/news');
});

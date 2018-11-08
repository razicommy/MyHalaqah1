angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('intro', {
    url: '/intro',
    templateUrl: 'templates/intro.html',
    controller: 'introCtrl'
  })

  .state('login', {
    url: '/page30',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.home', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.takwim', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/takwim.html',
        controller: 'takwimCtrl'
      }
    }
  })

  .state('menu.halaqah', {
    url: '/page200',
    views: {
      'side-menu21': {
        templateUrl: 'templates/halaqah.html',
        controller: 'halaqahCtrl'
      }
    }
  })

  .state('guru', {
    url: '/page300',
    templateUrl: 'templates/guru.html',
    controller: 'guruCtrl'
  })

  .state('pengurusan', {
    url: '/page400',
    templateUrl: 'templates/pengurusan.html',
    controller: 'pengurusanCtrl'
  })

  .state('pentadbiran', {
    url: '/page500',
    templateUrl: 'templates/pentadbiran.html',
    controller: 'pentadbiranCtrl'
  })

  .state('tasks', {
    url: '/page11',
    templateUrl: 'templates/tasks.html',
    controller: 'tasksCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('page', {
    url: '/page32',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page30')


});
'use strict';


/**
 * @ngdoc overview
 * @name hackathonApp
 * @description
 * # hackathonApp
 *
 * Main module of the application.
 */
angular
  .module('hackathonApp', [
    'ngRoute','restangular','angular-timezone-selector'
  ])
  .config(function ($routeProvider,RestangularProvider) {

  // RestangularProvider.setBaseUrl('http://localhost:714/Practice/api/v1/');

    $routeProvider
      .when('/', {
        templateUrl: 'Clock_Module/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  
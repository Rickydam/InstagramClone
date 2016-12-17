var app = angular.module('theApp', ['ui.router']);

app.config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html'
    });
});

app.controller('stateController', function($scope, $state) {
  $scope.$state = $state;
});

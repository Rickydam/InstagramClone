// Create an app variable containing the ui-router module
var app = angular.module('theApp', ['ui.router']);

// Initialize the state to "home" on first visit
app.run(['$state', function($state) {
  $state.transitionTo('home');
}]);

// Constantly check to see if the state changed
app.controller('stateController', function($scope, $state) {
  $scope.$state = $state;
});

// Route depending on the provided state
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
    })
});
